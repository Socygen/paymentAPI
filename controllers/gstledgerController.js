const Gstledger = require('../models/gstledgerModel');

exports.createGstledger = async (req, res) => {
    try {
        const savedGstledger = new Gstledger(req.body);
        await savedGstledger.save();
        return res.send({
            data: savedGstledger,
            message: "GST Ledger Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getGstledgers = async (req, res) => {
    try {
        const gstledgers = await Gstledger.find();
        return res.send({
            data: gstledgers,
            message: "GST Ledgers Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getGstledgerById = async (req, res) => {
    try {
        const gstledger = await Gstledger.findById(req.query.id);
        if (!gstledger) {
            return res.send({
                data: gstledger,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: gstledger,
                message: "GST Ledger Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateGstledger = async (req, res) => {
    try {
        const updategstledger = await Gstledger.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updategstledger) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updategstledger,
                message: "GST Ledger Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteGstledger = async (req, res) => {
    try {
        const deletegstledger = await Gstledger.findByIdAndDelete(req.query.id);
        if (!deletegstledger) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deletegstledger,
                message: "GST Ledger Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
