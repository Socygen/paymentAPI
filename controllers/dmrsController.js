const Dmrs = require('../models/dmrsModel');

exports.createDmrs = async (req, res) => {
    try {
        const newDmrs = new Dmrs(req.body);
        await newDmrs.save();
        return res.send({
            data: newDmrs,
            message: "DMRS Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getDmrs = async (req, res) => {
    try {
        const dmrs = await Dmrs.find();
        return res.send({
            data: dmrs,
            message: "DMRS Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getDmrsById = async (req, res) => {
    try {
        const dmrs = await Dmrs.findById(req.query.id);
        if (!dmrs) {
            return res.send({
                data: dmrs,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: dmrs,
                message: "DMRS Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateDmrs = async (req, res) => {
    try {
        const updatedmrs = await Dmrs.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updatedmrs) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updatedmrs,
                message: "DMRS Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteDmrs = async (req, res) => {
    try {
        const deletedmrs = await Dmrs.findByIdAndDelete(req.query.id);
        if (!deletedmrs) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deletedmrs,
                message: "DMRS Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
