//connect to our node app
const express =  require('express');
const mysql = require('mysql');

const PORT = process.env.PORT || 3000;
const app = express();

//connect the node app with MySql server
const con = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "Clariza0421!"
});

con.connect((err) => {
    if (!err){
        console.log("Connected to MySql server at port 3306...");
    }
});

//create a database
app.get("/create-transactiondb", (req, res) => {
    let sql = "CREATE DATABASE transaction";
    con.query(sql,(err,result) => {
        if(!err){
            res.send("successfully created transaction database...");
        }else{
            res.send ("failed to create school database...");
        }

    })
}) 
//create a table

app.listen(PORT,() => {
    console.log("listening to port " + PORT + "...");
});



