const FundRequest = require('../models/fundrequestModel');

exports.createFundRequest = async (req, res) => {
    try {
        const savedFundRequest = new FundRequest(req.body);
        await savedFundRequest.save();
        return res.send({
            data: savedFundRequest,
            message: "Fund Request Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getFundRequests = async (req, res) => {
    try {
        const fundRequests = await FundRequest.find();
        return res.send({
            data: fundRequests,
            message: "Fund Request Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getFundRequestById = async (req, res) => {
    try {
        const fundRequest = await FundRequest.findById(req.query.id);
        if (!fundRequest) {
            return res.send({
                data: fundRequest,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: fundRequest,
                message: "Fund Request Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateFundRequest = async (req, res) => {
    try {
        const updatefundRequest = await FundRequest.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updatefundRequest) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updatefundRequest,
                message: "Fund Request Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteFundRequest = async (req, res) => {
    try {
        const deletefundRequest = await FundRequest.findByIdAndDelete(req.query.id);
        if (!deletefundRequest) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deletefundRequest,
                message: "Fund Request Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
