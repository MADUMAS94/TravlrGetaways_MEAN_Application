var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('.data/trips.json','utf8'));

/*GET TRAVEL VIEW*/
const travel = (req, res) => {
    res.render('travel',{title: 'Travlr Gataways'});
};

module.exports = {
    travel
};