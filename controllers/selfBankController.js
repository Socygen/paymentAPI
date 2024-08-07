const SelfBank = require('../models/selfbankModel');

exports.createSelfbank = async (req, res) => {
    try {
        const savedselfBank = new SelfBank(req.body);
        await savedselfBank.save();
        return res.send({
            data: savedselfBank,
            message: "Self Bank Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getSelfbanks = async (req, res) => {
    try {
        const selfBanks = await SelfBank.find();
        return res.send({
            data: selfBanks,
            message: "Self Banks Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getSelfbankById = async (req, res) => {
    try {
        const selfBank = await SelfBank.findById(req.query.id);
        if (!selfBank) {
            return res.send({
                data: selfBank,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: selfBank,
                message: "Self Bank Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateSelfbank = async (req, res) => {
    try {
        const updateselfBank = await SelfBank.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updateselfBank) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updateselfBank,
                message: "Self Bank Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteSelfbank = async (req, res) => {
    try {
        const deleteselfBank = await SelfBank.findByIdAndDelete(req.query.id);
        if (!deleteselfBank) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deleteselfBank,
                message: "Self Bank Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
