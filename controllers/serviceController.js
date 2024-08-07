const Service = require('../models/serviceModel');

exports.createService = async (req, res) => {
    try {
        const savedservice = new Service(req.body);
        await savedservice.save();
        return res.send({
            data: savedservice,
            message: "Service Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getServices = async (req, res) => {
    try {
        const services = await Service.find();
        return res.send({
            data: services,
            message: "Services Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getServiceById = async (req, res) => {
    try {
        const service = await Service.findById(req.query.id);
        if (!service) {
            return res.send({
                data: service,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: service,
                message: "Service Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateService = async (req, res) => {
    try {
        const updateservice = await Service.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updateservice) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updateservice,
                message: "Service Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteService = async (req, res) => {
    try {
        const deleteservice = await Service.findByIdAndDelete(req.query.id);
        if (!deleteservice) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deleteservice,
                message: "Service Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
