// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var express = require("express");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/home", function(req, res) {
    if (req.user) {
      res.redirect("");
    }
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("");
    }
    res.sendFile(path.join(__dirname, "/public/login.html"));
  });

  app.get("/register", function(req, res) {
    if (req.user) {
      res.redirect("/public/register.html");
    }
    res.sendFile(path.join(__dirname, ""));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/members", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/members.html"));
  // });

  
  app.get("/map", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/map.html"))
  })

};
