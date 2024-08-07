const GstRegistrations = require('../models/gstRegistrationModel');

exports.createGstregistration = async (req, res) => {
    try {
        const savedRegistration = new GstRegistrations(req.body);
        await savedRegistration.save();
        return res.send({
            data: savedRegistration,
            message: "GST Registration Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getGstregistrations = async (req, res) => {
    try {
        const gstRegistrations = await GstRegistrations.find();
        return res.send({
            data: gstRegistrations,
            message: "GST Registrations Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getGstregistrationById = async (req, res) => {
    try {
        const gstRegistration = await GstRegistrations.findById(req.query.id);
        if (!gstRegistration) {
            return res.send({
                data: gstRegistration,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: gstRegistration,
                message: "GST Registration Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateGstregistration = async (req, res) => {
    try {
        const updategstRegistration = await GstRegistrations.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updategstRegistration) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updategstRegistration,
                message: "GST Registration Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteGstRegistration = async (req, res) => {
    try {
        const deletegstRegistration = await GstRegistrations.findByIdAndDelete(req.query.id);
        if (!deletegstRegistration) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deletegstRegistration,
                message: "GST Registration Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
