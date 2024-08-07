const { ItrLedger } = require('../models/itrLedgerModel');

exports.createItrLedger = async (req, res) => {
    try {
        const savedItrLedger = new ItrLedger(req.body);
        await savedItrLedger.save();
        return res.send({
            data: savedItrLedger,
            message: "ITR Ledger Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getItrLedgers = async (req, res) => {
    try {
        const itrLedgers = await ItrLedger.find();
        return res.send({
            data: itrLedgers,
            message: "ITR Ledgers Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getItrLedgerById = async (req, res) => {
    try {
        const itrLedger = await ItrLedger.findById(req.query.id);
        if (!itrLedger) {
            return res.send({
                data: itrLedger,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: itrLedger,
                message: "ITR Ledger Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateItrLedger = async (req, res) => {
    try {
        const updateItrLedger = await ItrLedger.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updateItrLedger) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: updateItrLedger,
                message: "ITR Ledger Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteItrLedger = async (req, res) => {
    try {
        const deleteItrLedger = await ItrLedger.findByIdAndDelete(req.query.id);
        if (!deleteItrLedger) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deleteItrLedger,
                message: "ITR Ledger Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
