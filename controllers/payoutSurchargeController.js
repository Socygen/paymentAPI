const PayoutSurcharge = require('../models/payoutsurchargeModel');

exports.createPayoutsurcharge = async (req, res) => {
    try {
        const savedpayoutSurcharge = new PayoutSurcharge(req.body);
        await savedpayoutSurcharge.save();
        return res.send({
            data: savedpayoutSurcharge,
            message: "Payout Surcharge Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getPayoutsurcharges = async (req, res) => {
    try {
        const payoutSurcharges = await PayoutSurcharge.find();
        return res.send({
            data: payoutSurcharges,
            message: "Payout Surcharge Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getPayoutsurchargeById = async (req, res) => {
    try {
        const payoutSurcharge = await PayoutSurcharge.findById(req.query.id);
        if (!payoutSurcharge) {
            return res.send({
                data: payoutSurcharge,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: payoutSurcharge,
                message: "Payout Surcharge Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updatePayoutsurcharge = async (req, res) => {
    try {
        const updatepayoutSurcharge = await PayoutSurcharge.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updatepayoutSurcharge) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updatepayoutSurcharge,
                message: "Payout Surcharge Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deletePayoutsurcharge = async (req, res) => {
    try {
        const deletepayoutSurcharge = await PayoutSurcharge.findByIdAndDelete(req.query.id);
        if (!deletepayoutSurcharge) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deletepayoutSurcharge,
                message: "Payout Surcharge Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
