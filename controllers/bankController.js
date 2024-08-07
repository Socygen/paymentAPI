const Bank = require('../models/bankModel');


exports.createBank = async (req, res) => {
    try {
        const savedBank = new Bank(req.body);
        await savedBank.save();
        return res.send({
            data: savedBank,
            message: "Bank Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getBanks = async (req, res) => {
    try {
        const banks = await Bank.find();
        return res.send({
            data: banks,
            message: "Banks Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getBankById = async (req, res) => {
    try {
        const bank = await Bank.findById(req.query.id);
        if (!bank) {
            return res.send({
                data: bank,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: bank,
                message: "Bank Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateBank = async (req, res) => {
    try {
        const updatebank = await Bank.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updatebank) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updatebank,
                message: "Bank Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteBank = async (req, res) => {
    try {
        const deletebank = await Bank.findByIdAndDelete(req.query.id);
        if (!deletebank) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deletebank,
                message: "Bank Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
