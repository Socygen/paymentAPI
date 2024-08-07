const District = require('../models/districtModel');

exports.createDistrict = async (req, res) => {
    try {
        const savedDistrict = new District(req.body);
        await savedDistrict.save();
        return res.send({
            data: savedDistrict,
            message: "District Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getDistricts = async (req, res) => {
    try {
        const districts = await District.find();
        return res.send({
            data: districts,
            message: "Districts Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getDistrictById = async (req, res) => {
    try {
        const district = await District.findById(req.query.id);
        if (!district) {
            return res.send({
                data: district,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: district,
                message: "District Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateDistrict = async (req, res) => {
    try {
        const updatedistrict = await District.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updatedistrict) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updatedistrict,
                message: "District Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteDistrict = async (req, res) => {
    try {
        const deletedistrict = await District.findByIdAndDelete(req.query.id);
        if (!deletedistrict) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deletedistrict,
                message: "District Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
