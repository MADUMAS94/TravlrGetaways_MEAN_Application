/*GET TRAVEL VIEW*/
const travel = (req, res) => {
    res.render('travel',{title: 'Travlr Gataways'});
};

module.exports = {
    travel
};