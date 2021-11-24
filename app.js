//imports
const express =  require('express');
const exphbs = require('express-handlebars');
//const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');


require('dotenv').config();

//dotenv.config({path: './.env'});
const port = process.env.PORT || 3000
const app = express();

//Static Files
const publicDirectory = path.join(__dirname, './public' );
app.use(express.static(publicDirectory));

//Middleware
app.use(express.urlencoded({ extended: true}));

//Parsing application/json
app.use(express.json());

//templating engine
app.engine('hbs', exphbs({ extname: '.hbs'}));
app.set('view engine', 'hbs');


app.use('/', require('./server/routes/pages'));

const create = require('./server/routes/create');
app.use('/', create);

const CD = require('./server/routes/createDay');
app.use('/', CD);

const routes = require('./server/routes/view');
app.use('/', routes);

const VD = require('./server/routes/viewDay');
app.use('/', VD);

//listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));



