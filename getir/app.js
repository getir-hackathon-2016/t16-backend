var _fs = require("fs");

var app = {};
app.route = {
   root: function(req, res, next){
      res.send("nö!");
      next();
   }
};

// auto require & register routes
var files = _fs.readdirSync(__dirname +"/route");
files.forEach(function(file){
   var fileName = file.slice(0, -3);
   var filePath = "./route/"+ file;

   // use file name as route name
   app.route[fileName] = require(filePath);

   console.log("Registering route: '%s' from '%s'.", fileName, filePath)
});

module.exports = app;