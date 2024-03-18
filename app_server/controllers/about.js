var fs = require('fs');
var ads = JSON.parse(fs.readFileSync('data/about.json','utf8'));

const about = (req, res) => {
    res.render('about', {title: "Travlr Getaways: About", ads});
};

module.exports = {
    about
};