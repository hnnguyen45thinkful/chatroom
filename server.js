//Created and edited by Hieu Nguyen
var socket_io = require('socket.io');
var http = require('http');
var express = require('express');

var app = express();
app.use(express.static('public'));

var server = http.Server(app);
var io = socket_io(server);

io.on('connection', function (socket) {
    var currentName = '';
    
    socket.on('nickname', function(nickname) {
        currentName = nickname;
       io.emit('nickname', nickname + ' has entered the room');
    });
    
    socket.on('message', function(message) {
        var fullMessage = currentName + ': ' + message;
        io.emit('message', fullMessage);
    });
});

server.listen(process.env.PORT || 8080);    
console.log('Server is running at http://localhost:8080');

// Enhance the Chatroom

// For this project you are going to take the code from the previous exercise and add some new features using Socket.IO. There are a number of subtasks which you can tackle. Pick two or three of the tasks from the list below and try to add them to your app:

// Broadcast and display a message to connected users when someone connects or disconnects
// Display a count of how many users are connected
// Add support for nicknames
// Add "{user} is typing" functionality
// Show who's online
// Add private messaging

