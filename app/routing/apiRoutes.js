//Required Dependencies
var path = require('path');
//From our friendsList made earlier
var friendList = require('../data/friends');
//Exporting API routes
module.exports = function(app) {
    console.log(app);
    //Gets our total friends list in json format
    app.get("/api/friends", function(req, res) {
        res.json(friendList)
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body.scores);
        //The users new details from the form
        var newFriend = req.body;
        //parsing the scores using the parseInt function
        for(var i = 0; i < newFriend.scores.length; i++) {
            newFriend.scores[i] = parseInt(newFriend.scores[i]);
        }

        //This will grab the first value from the friend index
        var BFFIndex = 0;
        //This will be a placeholder for the "closest" match even though there will be many closer ones.
        var minDiff = 500;
        //This will loop through our friends list and compares each and every user to the base difference
        for(var i = 0; i < friendList.length; i++) {
            var totalDiff = 0;
            //This for loop adds the difference between the user and friendList scores and adds it to the total difference
            for(var n = 0; n < friendList[i].scores.length; n++) {
                //This is crucial to make sure both greater than and less than the users values is added the same
                var diff = Math.abs(newFriend.scores[n] - friendList[i].scores[n]);
                totalDiff += diff;
            }
        }


    });
    


}