const Gallery = require('../models/galleryModel');

exports.createGallery = async (req, res) => {
    try {
        const savedGallery = new Gallery(req.body);
        await savedGallery.save();
        return res.send({
            data: savedGallery,
            message: "Gallery Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getGalleries = async (req, res) => {
    try {
        const galleries = await Gallery.find();
        return res.send({
            data: galleries,
            message: "Galleries Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getGalleryById = async (req, res) => {
    try {
        const gallery = await Gallery.findById(req.query.id);
        if (!gallery) {
            return res.send({
                data: gallery,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: gallery,
                message: "Gallery Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateGallery = async (req, res) => {
    try {
        const updategallery = await Gallery.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updategallery) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updategallery,
                message: "Gallery Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteGallery = async (req, res) => {
    try {
        const deletegallery = await Gallery.findByIdAndDelete(req.query.id);
        if (!deletegallery) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deletegallery,
                message: "Gallery Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
