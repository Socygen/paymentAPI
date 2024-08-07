const IdMaster = require('../models/idMasterModel');

exports.createIdmaster = async (req, res) => {
    try {
        const savedidMaster = new IdMaster(req.body);
        await savedidMaster.save();
        return res.send({
            data: savedidMaster,
            message: "Id Master Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getIdmasters = async (req, res) => {
    try {
        const idMasters = await IdMaster.find();
        return res.send({
            data: idMasters,
            message: "Id Masters Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getIdmasterById = async (req, res) => {
    try {
        const idMaster = await IdMaster.findById(req.query.id);
        if (!idMaster) {
            return res.send({
                data: idMaster,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: idMaster,
                message: "Id Master Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateIdmaster = async (req, res) => {
    try {
        const updateidMaster = await IdMaster.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updateidMaster) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updateidMaster,
                message: "Id Master Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteIdmaster = async (req, res) => {
    try {
        const deleteidMaster = await IdMaster.findByIdAndDelete(req.query.id);
        if (!deleteidMaster) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deleteidMaster,
                message: "Id Master Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
