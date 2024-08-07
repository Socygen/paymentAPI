const Balance = require('../models/balanceModel');

exports.createBalance = async (req, res) => {
    try {
        const savedBalance = new Balance(req.body);
        await savedBalance.save();
        return res.send({
            data: savedBalance,
            message: "Balance Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getBalance = async (req, res) => {
    try {
        const balances = await Balance.find();
        return res.send({
            data: balances,
            message: "Balance Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getBalanceById = async (req, res) => {
    try {
        const balances = await Balance.findById(req.query.id);
        if (!balances) {
            return res.send({
                data: balances,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: balances,
                message: "Balance Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateBalance = async (req, res) => {
    try {
        const updatebalance = await Balance.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updatebalance) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updatebalance,
                message: "Balance Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteBalance = async (req, res) => {
    try {
        const deletebalance = await Balance.findByIdAndDelete(req.query.id);
        if (!deletebalance) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deletebalance,
                message: "Balance Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
