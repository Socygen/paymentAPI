const PanToken = require('../models/pantokenModel');

exports.createPantoken = async (req, res) => {
    try {
        const savedpanToken = new PanToken(req.body);
        await savedpanToken.save();
        return res.send({
            data: savedpanToken,
            message: "Pan Token Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getPantokens = async (req, res) => {
    try {
        const panTokens = await PanToken.find();
        return res.send({
            data: panTokens,
            message: "Pan Tokens Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getPantokenById = async (req, res) => {
    try {
        const panToken = await PanToken.findById(req.query.id);
        if (!panToken) {
            return res.send({
                data: panToken,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: panToken,
                message: "Pan Token Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updatePantoken = async (req, res) => {
    try {
        const updatepanToken = await PanToken.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updatepanToken) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updatepanToken,
                message: "Pan Token Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deletePantoken = async (req, res) => {
    try {
        const deletepanToken = await PanToken.findByIdAndDelete(req.query.id);
        if (!deletepanToken) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deletepanToken,
                message: "Pan Token Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
