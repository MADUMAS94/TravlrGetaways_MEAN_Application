const mongoose = require('mongoose');
const model = mongoose.model('trips');

//returns a list of all trip
const tripList = async (req, res) => {
    try {
        const trips = await model.find({});
        if (!trips) {
            return res
                .status(404)
                .json({ "message": "No trips found" });
        } else {
            return res
                .status(200)
                .json(trips);
        }
    } catch (err) {
        return res
            .status(404)
            .json(err);
    }
};

//returns a single trip
const tripsFindCode = async (req, res) => {
    try {
        const trip = await model.find({ 'code': req.params.tripCode });
        if (!trip) {
            return res
                .status(404)
                .json({ "message": "trip not found" });
        } else {
            return res
                .status(200)
                .json(trip);
        }
    } catch (err) {
        return res
            .status(404)
            .json(err);
    }
};

module.exports = {
    tripList,
    tripsFindCode
};