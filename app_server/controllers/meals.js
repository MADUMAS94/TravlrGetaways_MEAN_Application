var fs = require('fs');
var food = JSON.parse(fs.readFileSync('data/meals.json','utf8'));


const meals = (req, res) => {
    res.render('meals', {title: "Travlr Getaways: Meals", food});
};

module.exports = {
    meals
};