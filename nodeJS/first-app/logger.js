
var url = 'http://mylogger.io/log';

funciton log(message) {
    // Send an HTTP request
    console.log(message);
}

module.exports.log = log;
module.exports.endPoint = url;