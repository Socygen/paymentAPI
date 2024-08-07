const Member = require('../models/memberModel');

// Create a new member
exports.createMember = async (req, res) => {
    try {
        const newMember = new Member(req.body);
        const savedMember = await newMember.save();
        return res.status(201).json({
            data: savedMember,
            message: "Member Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

// Get all members
exports.getMembers = async (req, res) => {
    try {
        const members = await Member.find();
        return res.status(200).json({
            data: members,
            message: "Members Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

// Get member by ID
exports.getMemberById = async (req, res) => {
    try {
        const member = await Member.findById(req.query.id);
        if (!member) {
            return res.status(404).json({
                data: null,
                message: "No Record Found",
                status: true
            });
        }
        return res.status(200).json({
            data: member,
            message: "Member Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

// Update member by ID
exports.updateMember = async (req, res) => {
    try {
        const updatedMember = await Member.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updatedMember) {
            return res.status(404).json({
                message: "No Record Found",
                status: true
            });
        }
        return res.status(200).json({
            data: updatedMember,
            message: "Member Updated Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

// Delete member by ID
exports.deleteMember = async (req, res) => {
    try {
        const deletedMember = await Member.findByIdAndDelete(req.query.id);
        if (!deletedMember) {
            return res.status(404).json({
                message: "No Record Found",
                status: true
            });
        }
        return res.status(200).json({
            data: deletedMember,
            message: "Member Deleted Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

// Get unique member ID
exports.getMemberuniqueId = async (req, res) => {
    try {
        const membersCount = await Member.countDocuments() + 1;
        return res.status(200).json({
            data: membersCount,
            message: "Member UniqueId Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
