var fs = require('fs');
var roomsinfo = JSON.parse(fs.readFileSync('data/rooms.json','utf8'));

const rooms = (req, res) => {
    res.render('rooms', {title: "Travlr Getaways: Rooms", roomsinfo});
};

module.exports = {
    rooms
};