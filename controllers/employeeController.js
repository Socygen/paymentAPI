const Employee = require('../models/employeeModel');

exports.createEmployee = async (req, res) => {
    try {
        const newEmployee = new Employee(req.body);
        await newEmployee.save();
        return res.send({
            data: newEmployee,
            message: "Employee Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        return res.send({
            data: employees,
            message: "Employees Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.query.id);
        if (!employee) {
            return res.send({
                data: employee,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: employee,
                message: "Employee Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateEmployee = async (req, res) => {
    try {
        const updateemployee = await Employee.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updatedmrs) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updateemployee,
                message: "Employee Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteEmployee = async (req, res) => {
    try {
        const deleteemployee = await Employee.findByIdAndDelete(req.query.id);
        if (!deleteemployee) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deleteemployee,
                message: "Employee Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
