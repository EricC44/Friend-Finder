
var path = require('path');

module.exports = function(app) {
    //if the user enters survey in URL or presses the button, would then prompt survey
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    //route for homepage 
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/index.html"))
    });
}