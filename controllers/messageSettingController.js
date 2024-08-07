const MessageSetting = require('../models/messagesettingModel');

exports.createMessagesetting = async (req, res) => {
    try {
        const savedmessageSetting = new MessageSetting(req.body);
        await savedmessageSetting.save();
        return res.send({
            data: savedmessageSetting,
            message: "Message Setting Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getMessagesettings = async (req, res) => {
    try {
        const messageSettings = await MessageSetting.find();
        return res.send({
            data: messageSettings,
            message: "Message Settings Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getMessagesettingById = async (req, res) => {
    try {
        const messageSetting = await MessageSetting.findById(req.query.id);
        if (!messageSetting) {
            return res.send({
                data: messageSetting,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: messageSetting,
                message: "Message Setting Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateMessagesetting = async (req, res) => {
    try {
        const updatemessageSetting = await MessageSetting.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updatemessageSetting) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updatemessageSetting,
                message: "Message Setting Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteMessagesetting = async (req, res) => {
    try {
        const deletemessageSetting = await MessageSetting.findByIdAndDelete(req.query.id);
        if (!deletemessageSetting) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deletemessageSetting,
                message: "Message Setting Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
