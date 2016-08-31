var Socket = require('ws');
var socket = new Socket('ws://localhost:8080');

socket.on('open', function () {
    console.log('open')
    socket.send('发')
});

socket.on('message', function (msg) {
    console.log(msg)
});