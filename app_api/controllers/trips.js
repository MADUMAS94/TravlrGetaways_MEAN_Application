const mongoose = require('mongoose');
const model = mongoose.model('trips');
const User = mongoose.model('users');

mongoose.set('useFindAndModify', false);



const getUser = (req, res, callback) => {
    console.log('in #getUser');
    //console.log(req.payload.email); 
    if (req.auth && req.auth.email) {
    // if (req.payload && req.payload.email) {
        User
            .findOne({ email : req.auth.email })
            .exec((err, user) => {
                if (!user) {
                    return res  
                        .status(404)
                        .json({"message": "Email not found"});
                } else if (err) {
                    console.log(err);
                    return res
                        .status(404)
                        .json(err);
                }
                callback(req, 
                    res.json({"message": "User found"}), 
                    console.log('callback'),
                    console.log(req.auth)
                    
                    );
                });
    } else {
        return res
            .status(404)
            .json({"message": "User was not found"});
            console.log(req.payload);
    }
};


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
    getUser(req, res, 
        (req, res) => {
            model
            .create({
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            },
            (err, trip) => {
                if (err) {
                    return res
                        .status(400) // bad request, invalid content
                        .json(err);
                } else {
                    return
                }
            })
            console.log("Added trip");
        }
    );

}


const tripsUpdateTrip = async (req, res) => {
    getUser(req, res,
        (req, res) => {        
            model.findOneAndUpdate({ 'code': req.params.tripCode }, {
                    code: req.body.code,
                    name: req.body.name,
                    length: req.body.length,
                    start: req.body.start,
                    resort: req.body.resort,
                    perPerson: req.body.perPerson,
                    image: req.body.image,
                    description: req.body.description
                }, {new: true})               
                .then(model => {
                    if (!model) {
                        return res
                            .status(404)
                            .send({
                                message: "Trip not found with code " + req.params.tripCode
                            });
                    }
                    return res          
                }).catch(err => {
                    if (err.kind === 'ObjectId') {
                        return res
                            .status(404)
                            .send({
                                message: "Trip not found with code " + req.params.tripCode
                            });
                    }
                    return res
                        .status(500)
                        .json(err);
                })
                console.log("Updated trip id:" + req.params.tripCode);
        });
}

const tripsDeleteTrip = async (req, res) => {
    getUser(req, res,
        (req, res) => {
            console.log("inside trips.js on server #tripsDeleteTrip");
            model.findOneAndDelete({'code': req.params.tripCode})
            
        
            .then(model => {
                if (!model) {
                    return res
                        .status(404)
                        .send({
                            message: "Trip not found with code " + req.params.tripCode
                        });
        
                }
                return res
                    

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
            })
            console.log("Deleted trip id:" + req.params.tripCode);

        });


}



module.exports = {
    tripList,
    tripsFindCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};