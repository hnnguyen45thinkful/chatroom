//Starting off the jQuery Code.
$(document).ready(function() {
    var socket = io();
    var input = $('input');
    var messages = $('#messages');
    var nickname = prompt('Please Enter Your Nickname');
    
    socket.emit('nickname', nickname);
    
    var addNickname = function(username) {
        messages.append('<div>' + username + '</div>');
    };
    
    var addMessage = function(message) {
        messages.append('<div>' + message + '</div>');
    };

    input.on('keydown', function(event) {
        if (event.keyCode != 13) {
            return;
        }

        var message = input.val();
        socket.emit('message', message);
        input.val('');
    });
    
    socket.on('message', addMessage);
    socket.on('nickname', addNickname);
});