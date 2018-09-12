var express = require("express");
var axios	= require("axios");
var router	= express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");
var moment = require('moment');

// INDEX - show all campgrounds
router.get("/", function(req, res){
	// GET all campgrounds from DB
	Campground.find({}, function(err, allCampgrounds){
		if (err) {
			console.log(err);
		} else {
			res.render("campgrounds/index", {campgrounds: allCampgrounds});
		}
	});
});

// CREATE - add new campground to DB
router.post("/", middleware.isLoggedIn, function(req, res){
	// get data from form and add to campgrounds array
	var name = req.body.name;
	var price = req.body.price;
	var image = req.body.image;
	var address = req.body.address;
	var lat = req.body.latitude;
	var lng = req.body.longitude;
	var phone = req.body.phone;
	var desc = req.body.description;
	var author = {
		id: req.user._id,
		username: req.user.username
	}
	var newCampground = {name: name, price:price, image:image, address:address, latitude:lat, longitude:lng, phone:phone, description:desc, author:author}
	// Create a new campground and save to Db
	Campground.create(newCampground, function(err, newlyCreated){
		if (err) {
			console.log(err);
		} else {
			// redirect back to campgrounds page
			res.redirect("/campgrounds");
		}
	});
});

// NEW - show form to create campground
router.get("/new", middleware.isLoggedIn, function(req, res){
	res.render("campgrounds/new.ejs");
});

// SHOW - shows more info about one campground
router.get("/:id", function(req, res){
	// Find the campground with provieded ID
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		if (err) {
			console.log(err);
		} else {
			var tmp = moment(foundCampground.createdAt);
			var postedAt = tmp.format('llll').substring(0,26);
			// console.log(foundCampground.comments);
			// render show template with that campground
			res.render("campgrounds/show", {campground: foundCampground, time: postedAt});
		}
	});
});

// EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
	Campground.findById(req.params.id, function(err, foundCampground){
		res.render("campgrounds/edit", {campground: foundCampground});
	});
});

// UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
	// find and update the correct campground
	Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
		if (err) {
			res.redirect("/campgrounds");
		} else {
			res.redirect("/campgrounds/" + req.params.id);
		}
	});
	// redirect somewhere(show page)
});

// DESTROY CMAPGROUND ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
	Campground.findByIdAndRemove(req.params.id, function(err){
		if (err) {
			res.redirect("/campgrounds");
		} else {
			res.redirect("/campgrounds");
		}
	});
});

module.exports = router;