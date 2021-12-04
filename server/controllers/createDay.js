const mysql = require('mysql');

//connect the node app with MySql server
let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: 3306,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });
  
exports.create = (req,res) =>{
    console.log(req.body);

    const {date, week, Invoice_No, Tin, Quantity, Unit_Price, Calculation, Total_Sale} = req.body;

    connection.query('SELECT Invoice_No FROM heroku_321128323da050f.transaction WHERE Invoice_No = ?', [Invoice_No], (error, results)=>{
        if(error){
            console.log(error);
        }
    });

    connection.query('INSERT INTO heroku_321128323da050f.transaction SET ?', {
        Date: date, 
        Week: week, 
        Invoice_No: Invoice_No , 
        Tin: Tin, 
        Quantity: Quantity, 
        Unit_Price: Unit_Price, 
        Calculation: Calculation, 
        Total_Sale: Total_Sale}, (error,results)=>{
            if(error){
                console.log(error);
            }else{
                
                return res.render("createDay",{
                    success: "You've have successfully created a report"
                })
                
                
            }
        }
    )
}
