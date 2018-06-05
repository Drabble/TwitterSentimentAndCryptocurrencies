require('dotenv').config()
var moment = require('moment');
var socket = require('socket.io-client')('https://streamer.cryptocompare.com/');
var plotly = require('plotly')(process.env.PLOTLY_USERNAME, process.env.PLOTLY_API_KEY);
var Signal = require('signal')

var token = process.env.PLOTLY_STREAM_ID

var plotlystream = plotly.stream(token, function () {})

// Okay - stream to our plot!
var subscription = ['5~CCCAGG~BTC~USD'];
socket.emit('SubAdd', { subs: subscription });
socket.on("m", function(message) {
    var table = message.split("~");
    var type = table[4];
    if (type == 1 || type == 2 ) {
        var price = table[5];
        var now = moment().format("YYYY-MM-DD HH:mm:ss");
        //var now = moment().add(-2, 'hours').format("YYYY-MM-DD HH:mm:ss");
        console.log(now, price);
        var streamObject = JSON.stringify({ x : now, y : price });
        plotlystream.write(streamObject+'\n');
    }
});
