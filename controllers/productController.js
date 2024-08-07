const Product = require('../models/productModel');

exports.createProduct = async (req, res) => {
    try {
        const savedproduct = new Product(req.body);
        await savedproduct.save();
        return res.send({
            data: savedproduct,
            message: "Product Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.send({
            data: products,
            message: "Products Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.query.id);
        if (!product) {
            return res.send({
                data: product,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: product,
                message: "Product Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const updateproduct = await Product.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updateproduct) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updateproduct,
                message: "Product Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const deleteproduct = await Product.findByIdAndDelete(req.query.id);
        if (!deleteproduct) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deleteproduct,
                message: "Product Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
