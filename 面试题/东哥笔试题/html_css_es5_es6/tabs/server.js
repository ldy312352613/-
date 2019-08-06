var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 8080 });
var sockets=[];
wss.on('connection', function connection(ws) {
  if(sockets.indexOf(ws)==-1){
    console.log("push");
    sockets.push(ws)
  }
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    for(var socket of sockets){
      console.log("send");
      socket.send(message);
    }
  });
});