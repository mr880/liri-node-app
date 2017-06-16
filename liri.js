var fs = require("fs");

var command= process.argv[2];


fs.readFile("random.txt", "utf8", function(error, data) {
  switch(command){
  	case "my-tweets":

  	  break;
  	case "spotify-this-song":

  	  break;
  	case "movie-this":

  	  break;
  	case "do-what-it-says":
  	
  		break;
  	default:
  }
}  