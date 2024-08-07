const WalletPin = require('../models/walletpinModel');

exports.createWalletpin = async (req, res) => {
    try {
        const savedwalletPin = new WalletPin(req.body);
        await savedwalletPin.save();
        return res.send({
            data: savedwalletPin,
            message: "Wallet Pin Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getWalletpins = async (req, res) => {
    try {
        const walletPins = await WalletPin.find();
        return res.send({
            data: walletPins,
            message: "Wallet Pins Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getWalletpinById = async (req, res) => {
    try {
        const walletPin = await WalletPin.findById(req.query.id);
        if (!walletPin) {
            return res.send({
                data: walletPin,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: walletPin,
                message: "Wallet Pin Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateWalletpin = async (req, res) => {
    try {
        const updatewalletPin = await WalletPin.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updatewalletPin) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updatewalletPin,
                message: "Wallet Pin Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteWalletpin = async (req, res) => {
    try {
        const deletewalletPin = await WalletPin.findByIdAndDelete(req.query.id);
        if (!deletewalletPin) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deletewalletPin,
                message: "Wallet Pin Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
