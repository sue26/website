var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        month: {
            type: String,
            required: true
        },
        day: {
            type: String,
            required: true
        },
        year: {
            type: String,
            required: true
        }
    }
});

module.exports = NoteSchema;