const mongoose = require('mongoose');

// Define trip schema
const tripSchema = new mongoose.Schema({
    code: { type: String, index: true },
    name: { type: String, index: true },
    length: { type: String },
    start: { type: Date },
    resort: { type: String },
    perPerson: { type: String },
    image: { type: String },
    description: { type: String }
});





Trip = mongoose.model('trips', tripSchema);

module.exports = Trip