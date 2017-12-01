var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Redis = require('ioredis');
//Create new Redis instance
var redis = new Redis();
 
//Example howto subscribe to only one Redis channel
//redis.subscribe('test-channel', function(err, count) {
//});
//Subscribe to all Redis Channels
redis.psubscribe('*', function(err, count) {
console.log('Subscribed to ' + count + ' channels')
if (err) {
console.log('Errors subscribing to channel');
}
});
//Broadcast message when recieved from Redis on all channels
redis.on('pmessage', function(subscribed,channel, message) {
console.log('Message Recieved at channel(' + channel + '): ' + message);
message = JSON.parse(message);
io.emit(channel, message.data);
});
//Listen web socket on port 300
http.listen(3000, function(){

console.log('Listening on Port 3000');

});
