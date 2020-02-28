// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var express = require("express");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated.js");

module.exports = function(app) {
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/register.html"));
  });

  app.get("/map", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/map.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
