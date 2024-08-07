const IdRequest = require('../models/idRequestModel');

exports.createIdRequest = async (req, res) => {
    try {
        const savedidRequest = new IdRequest(req.body);
        await savedidRequest.save();
        return res.send({
            data: savedidRequest,
            message: "Id Request Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getIdRequests = async (req, res) => {
    try {
        const idRequests = await IdRequest.find();
        return res.send({
            data: idRequests,
            message: "Id Requests Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getIdRequestsById = async (req, res) => {
    try {
        const idRequest = await IdRequest.findById(req.query.id);
        if (!idRequest) {
            return res.send({
                data: idRequest,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: idRequest,
                message: "Id Request Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateIdRequest = async (req, res) => {
    try {
        const updateidRequest = await IdRequest.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updateidRequest) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updateidRequest,
                message: "Id Request Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteIdRequest = async (req, res) => {
    try {
        const deleteidRequest = await IdRequest.findByIdAndDelete(req.query.id);
        if (!deleteidRequest) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deleteidRequest,
                message: "Id Request Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
