const addToCartModel = require('../../models/cartProduct');

const addToCartController = async (req, res) => {
  try {
    const { productId } = req?.body;
    const currentUser = req.userId; // Assuming req.userId contains the current user's ID

    // Check if the product is already in the cart for the current user
    const isProductAvailable = await addToCartModel.findOne({
      productId: productId,
      userId: currentUser,
    });

    console.log(
      'add to cart controller isProductAvailable:',
      isProductAvailable
    );

    if (isProductAvailable) {
      return res.json({
        message: 'Already exists in Add to Cart',
        success: false,
        error: true,
      });
    }

    // If not, add the product to the cart
    const payload = {
      productId: productId,
      quantity: 1,
      userId: currentUser,
    };

    const newAddToCart = new addToCartModel(payload);
    const saveProduct = await newAddToCart.save();

    return res.json({
      data: saveProduct,
      message: 'Product Added to Cart',
      success: true,
      error: false,
    });
  } catch (err) {
    res.json({
      message: err?.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = addToCartController;
