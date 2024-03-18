var fs = require('fs');
var contacts = JSON.parse(fs.readFileSync('data/contact.json','utf8'));


const contact = (req, res) => {
    res.render('contact', {title: "Travlr Getaways: Contact", contacts});
};

module.exports = {
    contact
};