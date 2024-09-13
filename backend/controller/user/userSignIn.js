const bcrypt = require('bcryptjs');
const userModel = require('../../models/userModel');
const jwt = require('jsonwebtoken');

async function userSignInController(req, res) {
  try {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
      return res.status(400).json({
        message: 'Please provide both email and password',
        error: true,
        success: false,
      });
    }

    // Find user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
        error: true,
        success: false,
      });
    }

    // Check if password matches
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: 'Incorrect password',
        error: true,
        success: false,
      });
    }

    // Create JWT token
    const tokenData = {
      _id: user._id,
      email: user.email,
    };
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, {
      expiresIn: '8h',
    });

    // Cookie options
    const tokenOptions = {
      //create cookie and send response
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    // Send token in the response body
    res.status(200).json({
      message: 'Login successful',
      token, // Send the token in the body
      success: true,
      error: false,
    });

    // Set cookie and respond
    // res.cookie('token', token, tokenOptions).status(200).json({
    //   message: 'Login successful',
    //   user,
    //   token,
    //   success: true,
    //   error: false,
    // });
  } catch (err) {
    res.status(500).json({
      message: err.message || 'Internal server error',
      error: true,
      success: false,
    });
  }
}

module.exports = userSignInController;
