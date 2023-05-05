const Notification = require('../models/notification.model');

export const createNotification = async (req, res) => {
    try {
        const notification = await Notification.create(req.body);
        res.status(201).json(notification);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find({});
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

