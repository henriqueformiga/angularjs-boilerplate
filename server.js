var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/src'));
app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('src/index.html', { root: __dirname });
});
app.listen(app.get('port'), function () {
    console.log('App is running on port http://localhost:' + app.get('port'));
});