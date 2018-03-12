var express = require('express');
var fetch = require('node-fetch');
var bodyParser = require('body-parser');
var app = new (require('express'))();
var port = 3200

var algorithm = require('./TheCryptoAlgorithm');
var mathsUtil = require('./MathsUtil');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/crypto-status/:currencyCode', function (req, res) {
     var currencyCode = req.params.currencyCode;

    var precision = (req.query.precision) ? parseInt(req.query.precision) : 2;

    fetch("https://api.coinmarketcap.com/v1/ticker/" +currencyCode +"/", {
            mode: 'cors'
    })
    .then((response) => {
        return response.json();
    })
    .then((apiJson2) => {
            var apiJson = apiJson2[0];

            var nowPrice = parseFloat(apiJson['price_usd']);
            var percentChange = parseFloat(apiJson['percent_change_24h']);
            var lastPrice = nowPrice - ((nowPrice * percentChange) / 100.0);

            var scam = algorithm.evaluateIsItAScam(nowPrice, lastPrice);
            var diffPrice = nowPrice - lastPrice;

            var description = scam ? "It's a scam" : "It's not a scam";
            var changeType = scam ? "Down" : "Up";

            res.json(
                    {
                        "currency": apiJson['name'],
                        "symbol": apiJson['symbol'],
                        "lastPrice": mathsUtil.round(lastPrice, precision),
                        "nowPrice": mathsUtil.round(nowPrice, precision),
                        "diffPrice": mathsUtil.round(diffPrice, precision),
                        "percentageChange": mathsUtil.round(percentChange, precision),
                        "scam": scam,
                        "changeType": changeType,
                        "status": description
                    }
                )
        });
});

app.use(express.static(__dirname));

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

console.log('STARTING MW NODE on port: ' + port)

app.listen(port, function (error) {
    if (error) {
        console.log('Error reported.')
        console.error(error)
    } else {
        console.info("NODE MW STUB STARTED ==>  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});