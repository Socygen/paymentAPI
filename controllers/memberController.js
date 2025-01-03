const Member = require('../models/memberModel');

exports.createMember = async (req, res) => {
    const {
        mobile, emailId, memberId, joinerId, joinerName, type, package, firstName, middleName, lastName, dob, block, mohalla, shopName, idProof, addressProof, shopPhoto, shopType,
        qualification, population, locationType, location, landLine, aepsStatus, country, state, district, city, landmark, pincode, address, aadharnumber, pannumber, password, permission,
        aadharImage, pancardImage, passbookImage, userPhoto, formImage, status, narration, userCode
    } = req.body;

    if (!password) {
        return res.status(400).json({ status: false, error: "Password is required" });
    }

    try {
        let existingMobile = await Member.findOne({ mobile });
        let existingEmail = await Member.findOne({ emailId });

        if (existingMobile) {
            return res.status(400).json({
                data: existingMobile,
                message: "This Mobile Number Is Already Registered",
                status: true
            });
        } else if (existingEmail) {
            return res.status(400).json({
                data: existingEmail,
                message: "This Email Is Already Registered",
                status: true
            });
        } else {
            const salt = await bcrypt.genSalt(10);
            const passwordHash = await bcrypt.hash(password, salt);

            const newMember = new Member({
                mobile,
                emailId,
                memberId,
                joinerId,
                joinerName,
                type,
                package,
                firstName,
                middleName,
                lastName,
                dob,
                block,
                mohalla,
                shopName,
                idProof,
                addressProof,
                shopPhoto,
                shopType,
                qualification,
                population,
                locationType,
                location,
                landLine,
                aepsStatus,
                country,
                state,
                district,
                city,
                landmark,
                pincode,
                address,
                aadharnumber,
                pannumber,
                password: passwordHash,
                permission,
                aadharImage,
                pancardImage,
                passbookImage,
                userPhoto,
                formImage,
                status,
                narration,
                userCode
            });

            const savedMember = await newMember.save();
            return res.status(201).json({
                data: savedMember,
                message: "Member Created Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

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
