"use strict";

var server = require("server");

server.get("RenderTemplate", function(req, res, next) {
    res.render("templateExercise");
    return next();
});

server.get("TestDecorator", function(req, res, next) {
    res.render("templateDecoratorExercise");
    return next();
});

module.exports = server.exports();
