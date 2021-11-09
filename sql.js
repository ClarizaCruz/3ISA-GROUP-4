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
    password: "Clariza0421!",
    database: "Transaction"
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
            res.send ("failed to create transaction database...");
        }

    })
}) 
//create a Date Table
app.get("/create-date-table", (req,res) => {
    let sql = "CREATE TABLE Date(Date_ID int AUTO_INCREMENT, Date varchar(10), Day int, Month int, Year int, PRIMARY KEY(Date_ID))";
    con.query(sql, (err,result) => {
        if (!err){
            res.send(result);
        }else{
            res.send("failed to create date table...");
        }
    });
});

//C - create
app.get("/insert-date", (req,res) => {
    let newRow = { Date: "16/06/2021" , Day: 16, Month: 6, Year: 2021};
    let sql = "INSERT INTO Date SET ?";
    con.query(sql, newRow, (err,result) => {
        if (!err){
            res.send(result);
        }else{
            res.send("failed to insert into date table...");
        }
    });
});

//join tables
app.get("/read-transactions2", (req,res) => {
    let sql = "SELECT *" +
    " FROM transactions " +
    " INNER JOIN date"+
    " ON transactions.Date_ID = date.Date_ID" +
    " INNER JOIN sales"+
    " ON transactions.Sales_ID = sales.Sales_ID" +
    " INNER JOIN week"+
    " ON transactions.Week_ID = week.Week_ID";
    con.query(sql, (err,result) => {
        if (!err){
            res.send(result);
        }else{
            res.send("failed to read student...");
        }
    });
});

//call stored procedure
app.get("/call-transactions2", (req,res) => {
    let sql = "CALL DisplayTransactions()";
    con.query(sql, (err,result) => {
        if (!err){
            res.send(result);
        }else{
            res.send("failed to call the DisplayTransactions() procedure...");
        }
    });
});



app.listen(PORT,() => {
    console.log("listening to port " + PORT + "...");
});



