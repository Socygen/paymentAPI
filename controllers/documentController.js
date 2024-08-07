const Document = require('../models/documentModel');

exports.uploadDocument = async (req, res) => {
    try {
          
        if (!req.file) {
           return res.status(400).json({ status: false, message: 'No File Uploaded' });
        }

        const { filename, originalname } = req.file;
        const newDocumnet = new Document({
            filename,
            originalname,
            url: `${process.env.BASE_URL}/docUploads/${filename}`
        });

        const savedDocument = await newDocumnet.save();

        return res.json({
            data: savedDocument,
            message: "Document Uploaded Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
