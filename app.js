var tinderjs = require('tinderjs'),
    tinder = new tinderjs.TinderClient(),
    express = require('express'),
    app = express();

//Set up ejs for rendering
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(express.static(__dirname + '/static'));

// Immediate FB redirect FOR NOW.
app.get('/', function(req, res){
    res.redirect('facebooklink');
});

// Index page
app.get('/index', function (req, res) {
    res.render('index');
});

app.listen(6669);
console.log('Listening on port 6669');

