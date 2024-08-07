const MainWalletLedger = require('../models/mainwalletledgerModel');

exports.createMainwalletledger = async (req, res) => {
    try {
        const savedmainWalletLedger = new MainWalletLedger(req.body);
        await savedmainWalletLedger.save();
        return res.send({
            data: savedmainWalletLedger,
            message: "Main Wallet Ledger Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getMainwalletledger = async (req, res) => {
    try {
        const mainWalletLedgers = await MainWalletLedger.find();
        return res.send({
            data: mainWalletLedgers,
            message: "Main Wallet Ledgers Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getMainwalletledgerById = async (req, res) => {
    try {
        const mainWalletLedger = await MainWalletLedger.findById(req.query.id);
        if (!loginHistory) {
            return res.send({
                data: mainWalletLedger,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: mainWalletLedger,
                message: "Main Wallet Ledger Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateMainwalletledger = async (req, res) => {
    try {
        const updatemainWalletLedger = await MainWalletLedger.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updatemainWalletLedger) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updatemainWalletLedger,
                message: "Main Wallet Ledger Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteMainwalletledger = async (req, res) => {
    try {
        const deletemainWalletLedger = await MainWalletLedger.findByIdAndDelete(req.query.id);
        if (!deletemainWalletLedger) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deletemainWalletLedger,
                message: "Main Wallet Ledger Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
