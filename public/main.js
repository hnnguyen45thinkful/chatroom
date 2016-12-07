//Starting off the jQuery Code.
$(document).ready(function() {
    //add var socket to connect Socket.IO server.
    var socket = io();
    var input = $('input');
    var messages = $('#messages');

    var addMessage = function(message) {
        messages.append('<div>' + message + '</div>');
    };

input.on('keydown', function(event) {
    if (event.keyCode != 13) {
        return;
    }

    var message = input.val();
    addMessage(message);
    //Added socket.emitt with message that sends to socket.io server.
    socket.emit('message', message);
    input.val('');
});
    //Add a listener for the event for the Client.
    socket.on('message', addMessage);

});