const jwt = require('jsonwebtoken');

async function authToken(req, res, next) {
  try {
    console.log('auth middleware activated');
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

    //  const token = req.cookies?.token ||  req.body.token || req.header('Authorization').replace('Bearer ', '');

    console.log('token', token);

    // Check if the token is missing, null, or undefined
    if (!token || token === 'null' || token === 'undefined') {
      return res.status(401).json({
        message: 'Please Login...!',
        error: true,
        success: false,
      });
    }

    jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decoded) {
      console.log(err);
      console.log('decoded', decoded);

      if (err) {
        console.log('error auth', err);
      }

      req.userId = decoded?._id;

      next();
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      data: [],
      error: true,
      success: false,
    });
  }
}

module.exports = authToken;
