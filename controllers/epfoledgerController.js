const Epfoledger = require('../models/epfoledgerModel');

exports.createEpfoledger = async (req, res) => {
    try {
        const savedEpfoledger = new Epfoledger(req.body);
        await savedEpfoledger.save();
        return res.send({
            data: savedEpfoledger,
            message: "EPFO Ledger Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getEpfoledgers = async (req, res) => {
    try {
        const epfoledgers = await Epfoledger.find();
        return res.send({
            data: epfoledgers,
            message: "EPFO Ledgers Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getEpfoledgerById = async (req, res) => {
    try {
        const epfoledger = await Epfoledger.findById(req.query.id);
        if (!epfoledger) {
            return res.send({
                data: epfoledger,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: epfoledger,
                message: "EPFO Ledger Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateEpfoledger = async (req, res) => {
    try {
        const updateepfoledger = await Epfoledger.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updateepfoledger) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: epfoledgers,
                message: "EPFO Ledger Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteEpfoledger = async (req, res) => {
    try {
        const deleteepfoledger = await Epfoledger.findByIdAndDelete(req.query.id);
        if (!deleteepfoledger) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deleteepfoledger,
                message: "EPFO Ledger Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
