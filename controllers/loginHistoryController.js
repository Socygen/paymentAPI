const LoginHistory = require('../models/loginhistoryModel');

exports.createLoginhistory = async (req, res) => {
    try {
        const savedloginHistory = new LoginHistory(req.body);
        await savedloginHistory.save();
        return res.send({
            data: savedloginHistory,
            message: "Login History Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getLoginhistories = async (req, res) => {
    try {
        const loginHistories = await LoginHistory.find();
        return res.send({
            data: loginHistories,
            message: "Login Histories Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getLoginhistoryById = async (req, res) => {
    try {
        const loginHistory = await LoginHistory.findById(req.query.id);
        if (!loginHistory) {
            return res.send({
                data: loginHistory,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: loginHistory,
                message: "Login History Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateLoginhistory = async (req, res) => {
    try {
        const updateloginHistory = await LoginHistory.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updateloginHistory) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updateloginHistory,
                message: "Login History Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteLoginhistory = async (req, res) => {
    try {
        const deleteloginHistory = await LoginHistory.findByIdAndDelete(req.query.id);
        if (!deleteloginHistory) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deleteloginHistory,
                message: "Login History Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
