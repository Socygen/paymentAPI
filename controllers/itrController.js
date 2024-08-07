const Itr = require('../models/itrModel');

exports.createItr = async (req, res) => {
    try {
        const saveditr = new Itr(req.body);
        await saveditr.save();
        return res.send({
            data: saveditr,
            message: "ITR Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getItrs = async (req, res) => {
    try {
        const itrs = await Itr.find();
        return res.send({
            data: itrs,
            message: "ITR Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getItrById = async (req, res) => {
    try {
        const itr = await Itr.findById(req.query.id);
        if (!itr) {
            return res.send({
                data: itr,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: itr,
                message: "ITR Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateItr = async (req, res) => {
    try {
        const updateitr = await Itr.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updateitr) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updateitr,
                message: "ITR Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteItr = async (req, res) => {
    try {
        const deleteitr = await Itr.findByIdAndDelete(req.query.id);
        if (!deleteitr) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deleteitr,
                message: "ITR Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
