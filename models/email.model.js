const { Schema } = require('firefose');
const { SchemaTypes } = require('firefose');
const { Model } = require('firefose');
const { String } = SchemaTypes;

const emailSchema = new Schema({
    to: {
        type: String,
        required: true
    },
    cc: {
        type: Array,
        required: false
    },
    bcc: {
        type: Array,
        required: false
    },
    subject: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    attachments: {
        type: Array,
        required: false
    }
}, { timestamp: true });

const Email = new Model('Email', emailSchema);

module.exports = Email;