const Aepscomission = require('../models/aepsComissionModel');

exports.createAepscomission = async (req, res) => {
    try {
        const savedComission = new Aepscomission(req.body);
        await savedComission.save();
        return res.send({
            data: savedComission,
            message: "AEPS Comission Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getAepscomission = async (req, res) => {
    try {
        const comissions = await Aepscomission.find();
        return res.send({
            data: comissions,
            message: "AEPS Comissions Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getAepscomissionById = async (req, res) => {
    try {
        const comissions = await Aepscomission.findById(req.query.id);
        if (!comissions) {
            return res.send({
                data: comissions,
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: comissions,
                message: "AEPS Comission Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateAepscomission = async (req, res) => {
    try {
        const updatecomission = await Aepscomission.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updatecomission) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updatecomission,
                message: "AEPS Comission Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteAepscomission = async (req, res) => {
    try {
        const deletecomission = await Aepscomission.findByIdAndDelete(req.query.id);
        if (!deletecomission) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deletedMember,
                message: "AEPS Comission Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
