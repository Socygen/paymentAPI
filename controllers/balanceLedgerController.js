const Balanceledger = require('../models/balanceledgerModel');

exports.createBalanceledger = async (req, res) => {
    try {
        const savedBalanceledger = new Balanceledger(req.body);
        await savedBalanceledger.save();
        return res.send({
            data: savedBalanceledger,
            message: "Balance Ledger Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getBalanceledger = async (req, res) => {
    try {
        const ledgers = await Balanceledger.find();
        return res.send({
            data: ledgers,
            message: "Balance Ledgers Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getBalanceledgerById = async (req, res) => {
    try {
        const ledgers = await Balanceledger.findById(req.query.id);
        if (!balances) {
            return res.send({
                data: ledgers,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: ledgers,
                message: "Balance Ledger Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateBalanceledger = async (req, res) => {
    try {
        const updateledger = await Balanceledger.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updateledger) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updateledger,
                message: "Balance Ledger Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteBalanceledger = async (req, res) => {
    try {
        const deleteledger = await Balanceledger.findByIdAndDelete(req.query.id);
        if (!deleteledger) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deleteledger,
                message: "Balance Ledger Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
