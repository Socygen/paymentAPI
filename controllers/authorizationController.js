const Member = require('../models/memberModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.userSignup = async (req, res) => {
    const { mobile, emailId, memberId, joinerId, joinerName, type, package, firstName, middleName, lastName, dob, block, mohalla, shopName, idProof, addressProof, shopPhoto, shopType,
        qualification, population, locationType, location, landLine, aepsStatus, country, state, district, city, landmark, pincode, address, aadharnumber, pannumber, password, permission,
        aadharImage, pancardImage, passbookImage, userPhoto, formImage, status, narration, userCode } = req.body;

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
            const salt = await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(password, salt);
            let newUser = await Member.create({
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

            const token = jwt.sign({ user_id: newUser._id, mobile }, process.env.TOKEN_KEY);
            newUser.token = token;
            return res.status(201).json({
                data: newUser,
                message: "You Are Registered Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
}

exports.userLogin = async (req, res) => {
    const { mobile, password } = req.body;

    try {
        const result = await Member.findOne({ mobile });
        if (result) {
            let isPasswordValid = await bcrypt.compare(password, result.password);
            if (isPasswordValid) {
                const token = jwt.sign({ user_id: result._id, mobile }, process.env.TOKEN_KEY);
                const userData = { ...result.toObject(), token };
                delete userData.password;
                res.status(200).json({
                    data: userData,
                    status: true
                });
            } else {
                res.status(403).json({ status: false, error: "Invalid Credentials" });
            }
        } else {
            res.status(403).json({ status: false, error: "User Not Found" });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
}

exports.checkAdmin = async (req, res) => {
    try {
        const result = await Member.findOne({ memberId: 'Admin' });
        if (result) {
            const membersCount = await Member.countDocuments();
            return res.status(200).json({ count: membersCount });
        } else {
            return res.status(200).json({ count: 0 });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
