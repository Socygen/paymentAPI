const Company = require('../models/companyModel');

exports.createCompany = async (req, res) => {
    try {
        const savedCompany = new Company(req.body);
        await savedCompany.save();
        return res.send({
            data: savedCompany,
            message: "Company Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        return res.send({
            data: companies,
            message: "Companies Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getCompanyById = async (req, res) => {
    try {
        const company = await Company.findById(req.query.id);
        if (!company) {
            return res.send({
                data: company,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: company,
                message: "Company Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateCompany = async (req, res) => {
    try {
        const updatecompany = await Company.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updatecompany) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updatecompany,
                message: "Company Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteCompany = async (req, res) => {
    try {
        const deleteCompany = await Company.findByIdAndDelete(req.query.id);
        if (!deleteCompany) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deleteCompany,
                message: "Company Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
