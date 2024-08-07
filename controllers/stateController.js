const State = require('../models/stateModel');

exports.createState = async (req, res) => {
    try {
        const savedstate = new State(req.body);
        await savedstate.save();
        return res.send({
            data: savedstate,
            message: "State Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getStates = async (req, res) => {
    try {
        const states = await State.find();
        return res.send({
            data: states,
            message: "States Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getStateById = async (req, res) => {
    try {
        const state = await State.findById(req.query.id);
        if (!state) {
            return res.send({
                data: state,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: state,
                message: "State Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateState = async (req, res) => {
    try {
        const updatestate = await State.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updatestate) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updatestate,
                message: "State Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteState = async (req, res) => {
    try {
        const deletestate = await State.findByIdAndDelete(req.query.id);
        if (!deletestate) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deletestate,
                message: "State Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
