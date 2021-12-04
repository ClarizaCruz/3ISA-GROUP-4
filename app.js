//imports
const express =  require('express');
const exphbs = require('express-handlebars');
//const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
//const encoder = express.urlencoded();


require('dotenv').config();

//dotenv.config({path: './.env'});
const port = process.env.PORT || 5000
const app = express();

//database connection
let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: 3306,
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
    if (error){
        console.log(error);
    }else{
        console.log("connected to the database successfully!");
    }
});


app.get("/",function(req,res){
    res.render("index");
})

app.post("/",express.urlencoded({ extended: true}),(req,res) => {
    var username = req.body.username;
    var password = req.body.password;

    connection.query("SELECT * FROM login WHERE BINARY user_name = ? AND BINARY user_pass = ?",[username,password],(error,results,fields) => {
        if (results !== null && results.length > 0) {
            res.redirect("/homepage");
        } else {
            return res.render("index",{
                message: 'Login Failed: Incorrect login credentials'
            })
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