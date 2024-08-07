const PanLedger = require('../models/panledgerModel');

exports.createPanledger = async (req, res) => {
    try {
        const savedpanLedger = new PanLedger(req.body);
        await savedpanLedger.save();
        return res.send({
            data: savedpanLedger,
            message: "Pan Ledger Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getPanledgers = async (req, res) => {
    try {
        const panLedgers = await PanLedger.find();
        return res.send({
            data: panLedgers,
            message: "Pan Ledgers Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getPanledgerById = async (req, res) => {
    try {
        const panLedger = await PanLedger.findById(req.query.id);
        if (!panLedger) {
            return res.send({
                data: panLedger,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: panLedger,
                message: "Pan Ledger Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updatePanledger = async (req, res) => {
    try {
        const updatepanLedger = await PanLedger.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updatepanLedger) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updatepanLedger,
                message: "Pan Ledger Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deletePanledger = async (req, res) => {
    try {
        const deletepanLedger = await PanLedger.findByIdAndDelete(req.query.id);
        if (!deletepanLedger) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deletepanLedger,
                message: "Pan Ledger Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
