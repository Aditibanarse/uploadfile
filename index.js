//Variable to access the methods from modules
var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandler");

//Creating a Javascript object to handle URL requests
var handle = {}
handle["/"]=requestHandler.start;
handle["/start"]=requestHandler.start;
handle["/upload"]=requestHandler.upload;
handle["/show"]=requestHandler.show;
//Calling the start method in server to initiate the process
server.start(router.route,handle);
