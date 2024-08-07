const Epfo = require('../models/epfoModel');

exports.createEpfo = async (req, res) => {
    try {
        const newEpfo = new Epfo(req.body);
        await newEpfo.save();
        return res.send({
            data: newEpfo,
            message: "EPFO Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getEpfos = async (req, res) => {
    try {
        const epfos = await Epfo.find();
        return res.send({
            data: epfos,
            message: "EPFO Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getEpfoById = async (req, res) => {
    try {
        const epfo = await Epfo.findById(req.query.id);
        if (!epfo) {
            return res.send({
                data: epfo,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: epfo,
                message: "EPFO Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateEpfo = async (req, res) => {
    try {
        const updateepfo = await Epfo.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updateepfo) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updateepfo,
                message: "EPFO Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteEpfo = async (req, res) => {
    try {
        const deleteepfo = await Epfo.findByIdAndDelete(req.query.id);
        if (!deleteepfo) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deleteepfo,
                message: "EPFO Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
