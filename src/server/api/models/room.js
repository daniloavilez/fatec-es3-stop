const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    categories: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }
    ],
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    reason: {
        type: String
    },
});

module.exports = mongoose.model('Room', schema);