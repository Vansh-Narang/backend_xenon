const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    image: { type: String },  // URL to the image
    type: { type: String, enum: ['rent', 'sale'], required: true },  // 'rent' or 'sale'
});

module.exports = mongoose.model('Property', PropertySchema);
