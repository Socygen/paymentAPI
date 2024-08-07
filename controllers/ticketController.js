const Ticket = require('../models/ticketModel');

exports.createTicket = async (req, res) => {
    try {
        const savedticket = new Ticket(req.body);
        await savedticket.save();
        return res.send({
            data: savedticket,
            message: "Ticket Created Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        return res.send({
            data: tickets,
            message: "Tickets Fetched Successfully",
            status: true
        });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.getTicketById = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.query.id);
        if (!ticket) {
            return res.send({
                data: ticket,
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: ticket,
                message: "Ticket Fetched Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.updateTicket = async (req, res) => {
    try {
        const updateticket = await Ticket.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updateticket) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        }
        else {
            return res.send({
                data: updateticket,
                message: "Ticket Updated Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

exports.deleteTicket = async (req, res) => {
    try {
        const deleteticket = await Ticket.findByIdAndDelete(req.query.id);
        if (!deleteticket) {
            return res.send({
                message: "No Record Found",
                status: true
            });
        } else {
            return res.send({
                data: deleteticket,
                message: "Ticket Deleted Successfully",
                status: true
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
