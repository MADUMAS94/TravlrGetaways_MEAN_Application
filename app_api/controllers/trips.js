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

const tripsAddTrip = async (req, res) => {

        const newTrip = new Trip ({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        });

        const q = await newTrip.save();

        if (!q) {
            return res
                .status(400)
                .json(err);
        } else {
            return res
                .status(201)
                .json(q);
        }

}


// PUT: /trips/:tripCode - Adds a new Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsUpdateTrip = async(req, res) => {
    // Uncomment for debugging
    console.log(req.params);
    console.log(req.body);
    const q = await Trip
    .findOneAndUpdate(
        {'code': req.params.tripCode },
        {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }
    )
    .exec();

    if(!q)
    { // Database returned no data
        return res
        .status(400)
        .json(err);
    } else { // Return resulting updated trip
        return res
        .status(201)
        .json(q);
    }
};

const tripsDeleteTrip = async (req, res) => {

    console.log("inside trips.js on server #tripsDeleteTrip");
    model.findOneAndDelete({'code': req.params.tripCode})
    

    .then(trip => {
        if (!trip) {
            return res
                .status(404)
                .send({
                    message: "Trip not found with code " + req.params.tripCode
                });

        }
        res.send(trip);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res
                .status(404)
                .send({
                    message: "Trip not found with code " + req.params.tripCode
                });
        }
        return res
            .status(500) // server error
            .json(err);
    });

}



module.exports = {
    tripList,
    tripsFindCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};