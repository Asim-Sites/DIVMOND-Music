const express = require("express");
const app = express();
// Some good core node modules
const path = require('path') // research the path native node module
const os = require('os'); // if we care about the users operating system at all.
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({
    defaultLayout: "main",
    extname: ".hbs",
    helpers: require("handlebars-helpers")(),
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
require('./data/divmond-db');

const homePageRouter = require('./controllers/homePage');
homePageRouter(app);

const port = process.env.PORT || 3000
app.listen(port, () =>{
    console.log(`Server is listening on ${port}`);
});
module.exports = { app }
