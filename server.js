//Created and edited by Hieu Nguyen
//Added the socket_io 
var socket_io = require('socket.io');
var http = require('http');
var express = require('express');

var app = express();
app.use(express.static('public'));


var server = http.Server(app);
var io = socket_io(server);


io.on('connection', function (socket) {
    console.log('Client connected');
    //Here you add a new listener to the socket which is used to communicate with the client. When a message with the name message is received on the socket you simply print out the message. Restart the server and try entering a message. You should see it getting printed by the server.
    socket.on('message', function(message) {
        console.log('Received message:', message);
        socket.broadcast.emit('message', message);
    });
});
app.listen(process.env.PORT || 8080, function(){
    console.log('Server is running at http://localhost:8080');
});
