const Order = require('../models/orderModel');

exports.createOrder = async (req, res) => {
    try {
        const savedorder = new Order(req.body);
        await savedorder.save();
        return res.send({
            data: savedorder,
            message: "Order Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        return res.send({
            data: orders,
            message: "Orders Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.query.id);
        if (!order) {
            return res.send({
                data: order,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: order,
                message: "Order Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const updateorder = await Order.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updateorder) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updateorder,
                message: "Order Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const deleteorder = await Order.findByIdAndDelete(req.query.id);
        if (!deleteorder) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deleteorder,
                message: "Order Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
