//imports
const express =  require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const encoder = bodyParser.urlencoded();


require('dotenv').config();

//dotenv.config({path: './.env'});
const port = process.env.PORT || 3000
const app = express();

//database connection
let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });

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

//login function
connection.connect((error)=>{
    if (error) throw error
    else console.log("connected to the database successfully!")
});


app.get("/",function(req,res){
    res.render("index");
})

app.post("/",encoder,(req,res) => {
    var username = req.body.username;
    var password = req.body.password;

    connection.query("SELECT * FROM login WHERE user_name = ? AND user_pass = ?",[username,password],(error,results,fields) => {
        if (results.length > 0) {
            res.redirect("/homepage");
        } else {
            res.redirect("/");
        }
        res.end();
    })
})

// when login is success
app.get("/homepage",(req,res)=>{
    res.render("homepage")
})


//listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));
