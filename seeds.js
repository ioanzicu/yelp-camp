var mongoose 	= require("mongoose"),
 	Campground 	= require("./models/campground"),
 	Comment 	= require("./models/comment")

var data = [
	{	
		name: "Cloud Rest", 
		image: "/img1.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quasi numquam reprehenderit tempore omnis delectus saepe quisquam, necessitatibus laudantium? Atque, voluptatum, quia voluptatem eos quibusdam nesciunt sed totam quam dicta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quasi numquam reprehenderit tempore omnis delectus saepe quisquam, necessitatibus laudantium? Atque, voluptatum, quia voluptatem eos quibusdam nesciunt sed totam quam dicta."
	},
	{	
		name: "Desert Mesa", 
		image: "/img2.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quasi numquam reprehenderit tempore omnis delectus saepe quisquam, necessitatibus laudantium? Atque, voluptatum, quia voluptatem eos quibusdam nesciunt sed totam quam dicta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quasi numquam reprehenderit tempore omnis delectus saepe quisquam, necessitatibus laudantium? Atque, voluptatum, quia voluptatem eos quibusdam nesciunt sed totam quam dicta."
	},
	{	
		name: "Canyon Floor", 
		image: "/img3.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quasi numquam reprehenderit tempore omnis delectus saepe quisquam, necessitatibus laudantium? Atque, voluptatum, quia voluptatem eos quibusdam nesciunt sed totam quam dicta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quasi numquam reprehenderit tempore omnis delectus saepe quisquam, necessitatibus laudantium? Atque, voluptatum, quia voluptatem eos quibusdam nesciunt sed totam quam dicta."
	}
]

function seedDB(){
	// Remove all campgrounds
	Campground.remove({}, function(err){
 		// if (err) {
 		// 	console.log(err);
 		// }
 		// console.log("removed campgrounds!");
 		// add a few campgrounds
		// data.forEach(function(seed){
		// 	Campground.create(seed, function(err, campground){
		// 		if(err){
		// 			console.log(err);
		// 		} else {
		// 			console.log("Added a campground");
		// 			// create a comment
		// 			Comment.create(
		// 				{
		// 					text: "This place is great!",
		// 					author: "Homer"
		// 				}, function(err, comment){
		// 					if(err){
		// 						console.log(err);
		// 					} else {
		// 						campground.comments.push(comment);
		// 						campground.save();
		// 						console.log("Created new comment");
		// 					}
		// 				});
		// 		}
		// 	});
		// });
	});
	// add a few comments
}

module.exports = seedDB;