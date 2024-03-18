var fs = require('fs');
var latestnews = JSON.parse(fs.readFileSync('data/newslatest.json','utf8'));
var tipsnews = JSON.parse(fs.readFileSync('data/newstips.json','utf8'));


const news = (req, res) => {
    res.render('news', {title: "Travlr Getaways: News", latestnews, tipsnews });
};

module.exports = {
    news
};