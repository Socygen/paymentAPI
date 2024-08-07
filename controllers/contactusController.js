const ContactUs = require('../models/contactusModel');

exports.createContactUs = async (req, res) => {
    try {
        const savedContact = new ContactUs(req.body);
        await savedContact.save();
        return res.send({
            data: savedContact,
            message: "Contact Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getContactUs = async (req, res) => {
    try {
        const contacts = await ContactUs.find();
        return res.send({
            data: contacts,
            message: "Contacts Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getContactUsById = async (req, res) => {
    try {
        const contact = await ContactUs.findById(req.query.id);
        if (!contact) {
            return res.send({
                data: contact,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: contact,
                message: "Contact Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateContactUs = async (req, res) => {
    try {
        const updatecontact = await ContactUs.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updatecontact) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updatecontact,
                message: "Contact Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteContactUs = async (req, res) => {
    try {
        const deletecontact = await ContactUs.findByIdAndDelete(req.query.id);
        if (!deletecontact) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deletecontact,
                message: "Contact Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
