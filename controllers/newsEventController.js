const NewsEvent = require('../models/newseventModel');

exports.createNewsevent = async (req, res) => {
    try {
        const savednewsEvent = new NewsEvent(req.body);
        await savednewsEvent.save();
        return res.send({
            data: savednewsEvent,
            message: "News Event Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getNewsevents = async (req, res) => {
    try {
        const newsEvents = await NewsEvent.find();
        return res.send({
            data: newsEvents,
            message: "News Events Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getNewseventById = async (req, res) => {
    try {
        const newsEvent = await NewsEvent.findById(req.query.id);
        if (!newsEvent) {
            return res.send({
                data: newsEvent,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: newsEvent,
                message: "News Event Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateNewsevent = async (req, res) => {
    try {
        const updatenewsEvent = await NewsEvent.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updatenewsEvent) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updatenewsEvent,
                message: "News Event Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteNewsevent = async (req, res) => {
    try {
        const deletenewsEvent = await NewsEvent.findByIdAndDelete(req.query.id);
        if (!deletenewsEvent) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deletenewsEvent,
                message: "News Event Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
