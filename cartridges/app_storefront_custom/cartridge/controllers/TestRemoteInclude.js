"use strict";

var server = require("server");

server.get("TestRemoteInclude", function(req, res, next) {
    res.render("templateExercise2");
    return next();
});

module.exports = server.exports();
