import mongoose from "mongoose";
import Product from "../models/product.model.js";

// Create a new product
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


// Get all products
export const getProducts = async (req , res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json({success: true, products})
    } catch (error) {
        console.error("Error in getProducts :", error.message);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

// Get a single product
export const getProduct = async(req,res)=>{
    let {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success: false, message: "Invalid product ID"})
    }
    try {
        const product = await Product.findById(id)
        res.status(200).json({success: true, product})
    } catch (error) {
        console.error("Error in getProduct :", error.message);
        res.status(500).json({ success: false, message: "Product not found" });
    }
}

// Update a product

export const updateProduct = async(req,res)=>{
    let {id} = req.params
    const product = req.body
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success: false, message: "Invalid product ID"})
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true})
        res.status(200).json({success: true, updatedProduct})
    }
    catch (error) {
        console.error("Error in updateProduct :", error.message);
        res.status(500).json({ success: false, message: "Product not found" });
    }
}



// Delete a product
export const deleteProducts = async(req,res)=>{
    let {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success: false, message: "Invalid product ID"})
    }

    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({success: true, message: "Product deleted successfully"})
    } catch (error) {
        console.error("Error in deleteProducts :", error.message);
        res.status(500).json({ success: false, message: "Product not found" });
        
    }

}