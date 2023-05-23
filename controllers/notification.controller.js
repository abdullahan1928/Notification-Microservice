const Notification = require('../models/notification.model');

exports.createNotification = async (req, res) => {
    try {
        // only create if the user is logged in
        if (!req.userID) {
            return res.status(401).json({ message: 'You must be logged in to create a notification' });
        }
        const notification = await Notification.create(req.body);
        res.status(201).json(notification);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find({});
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.updateStatus = async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.id);
        if (!notification) {    
            return res.status(404).json({ message: 'Notification not found' });
        }
        notification.status = "read";
        await notification.save();
        res.status(200).json(notification);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}