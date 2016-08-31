var Server = require('ws').Server;
var server = new Server({port:8080});

server.on('connection', function (socket) {
    socket.on('message', function (msg) {
        console.log(msg);

        socket.send('服务器说haha'+msg)
    })
});