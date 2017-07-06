var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/dateValues/:dateVal', function(req, res, next){

var dateVal = req.params.dateVal;

var dateFromattingOptions = {
    year : 'numeric',
    month : 'long',
    day : 'numeric'
}

if (isNaN(dateVal)){
    var naturalDate = new Date(dateVal);
    naturalDate = naturalDate.toLocaleDateString("en-us", dateFromattingOptions);
    var unixDate = new Date(dateVal).getTime()/1000;
}
else {
    unixDate = dateVal;
    var naturalDate = new Date(dateVal * 1000);
    naturalDate = naturalDate.toLocaleDateString("en-us", dateFromattingOptions);
}

res.json({unix: unixDate, natural : naturalDate});

return  ; 
});

app.listen(8080, function(){
    console.log('working')
});