//imports
const express =  require('express');
const path = require('path');
const mysql = require('mysql');
const dotenv = require('dotenv');


dotenv.config({path: './.env'});
const port = process.env.PORT || 3000
const app = express();

//connect the node app with MySql server
const con = mysql.createConnection({
  host: process.env.HOSTNAME,
  port: 3306,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

const publicDirectory = path.join(__dirname, './public' );
app.use(express.static(publicDirectory));
app.set('view engine', 'hbs');

con.connect((err) => {
  if (!err){
      console.log("Connected to MySql server at port 3306...");
  }
});

app.use('/', require('./routes/pages'));

//listen on port 3000
app.listen(port,() => console.info(`Listening on port ${port}`))



