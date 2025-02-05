import Product from "../models/product.model.js";

export const postProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill all the fields" });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, newProduct });
  } catch (error) {
    console.error("Error in Create product :", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
