// import externals
var _rest = require("restify");
var _restErr = require("restify-errors");

// import internals
var app = require("./getir/app.js");
var util = require("./getir/util/util.js");

// server stuff
var server = _rest.createServer();
server.use(_rest.bodyParser());
server.use(_rest.queryParser());
server.use(_rest.fullResponse());
server.use(_rest.gzipResponse());
server.use(_rest.authorizationParser());
server.use(_rest.acceptParser(server.acceptable));

// register routes
server.get("/", app.route.root);
server.post("/login", app.route.login);

// listen!
server.listen(3000, function(){
   console.log("Server listening at: %s.", server.url);
});