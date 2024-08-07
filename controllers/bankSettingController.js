const BankSetting = require('../models/banksettingModel');

exports.createBankSetting = async (req, res) => {
    try {
        const savedBank = new BankSetting(req.body);
        await savedBank.save();
        return res.send({
            data: savedBank,
            message: "Bank Setting Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getBankSettings = async (req, res) => {
    try {
        const banks = await BankSetting.find();
        return res.send({
            data: banks,
            message: "Bank Settings Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getBankSettingById = async (req, res) => {
    try {
        const bank = await BankSetting.findById(req.query.id);
        if (!bank) {
            return res.send({
                data: bank,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: bank,
                message: "Bank Setting Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateBankSetting = async (req, res) => {
    try {
        const updatebank = await BankSetting.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updatebank) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updatebank,
                message: "Bank Setting Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteBankSetting = async (req, res) => {
    try {
        const deletebank = await BankSetting.findByIdAndDelete(req.query.id);
        if (!deletebank) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deletebank,
                message: "Bank Setting Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
