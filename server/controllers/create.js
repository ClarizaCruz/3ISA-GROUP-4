const mysql = require('mysql');

//connect the node app with MySql server
let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });
  
exports.create = (req,res) =>{
    console.log(req.body);

    const {Date, Week, Invoice_No, Tin, Quantity, Unit_Price, Calculation, Total_Sale, month} = req.body;

    connection.query('SELECT Invoice_No FROM transaction WHERE Invoice_No = ?', [Invoice_No], (error, results)=>{
        if(error){
            console.log(error);
        }
    });

    
    connection.query('INSERT INTO transaction SET ?', {
        Date: Date, 
        Week: Week, 
        Invoice_No: Invoice_No , 
        Tin: Tin, 
        Quantity: Quantity, 
        Unit_Price: Unit_Price, 
        Calculation: Calculation, 
        month: month,
        Total_Sale: Total_Sale}, (error,results)=>{
            if(error){
                console.log(error);
            }else{
                return res.render("create",{
                    success: "You've have successfully created a report"
                })
                
                
            }
        }
    )
}

