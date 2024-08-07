const Aepswallet = require('../models/aepswalletModel');

exports.createAepswallet = async (req, res) => {
    try {
        const savedWallet = new Aepswallet(req.body);
        await savedWallet.save();
        return res.send({
            data: savedWallet,
            message: "AEPS Wallet Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getAepswallet = async (req, res) => {
    try {
        const wallets = await Aepswallet.find();
        return res.send({
            data: wallets,
            message: "Wallets Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getAepswalletById = async (req, res) => {
    try {
        const wallets = await Aepswallet.findById(req.query.id);
        if (!wallets) {
            return res.send({
                data: wallets,
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: wallets,
                message: "Wallet Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateAepswallet = async (req, res) => {
    try {
        const updatewallets = await Aepswallet.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updatewallets) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updatewallets,
                message: "Wallet Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteAepswallet = async (req, res) => {
    try {
        const deletewallets = await Aepswallet.findByIdAndDelete(req.query.id);
        if (!deletewallets) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deletewallets,
                message: "Wallet Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
