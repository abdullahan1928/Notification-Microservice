const { Schema } = require('firefose');
const { SchemaTypes } = require('firefose');
const { Model } = require('firefose');
const { String, Number } = SchemaTypes;

const notificationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    payload: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'unread',
        enum: ['unread', 'read']
    },
    userID: {
        type: String,
        required: true
    }
}, { timestamp: true });

const Notification = new Model('Notification', notificationSchema);

module.exports = Notification;