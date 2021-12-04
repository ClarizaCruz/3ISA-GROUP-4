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

    const {date, week, Invoice_No, Quantity, Unit_Price, Calculation, Total_Sale, month, Total_Vat, Total_Amount_Receivable } = req.body;

    connection.query('SELECT Invoice_No FROM heroku_321128323da050f.transactions WHERE Invoice_No = ?', [Invoice_No], (error, results)=>{
        if(error){
            console.log(error);
        }
    });

    
    connection.query('INSERT INTO heroku_321128323da050f.transactions SET ?', {
        Date: date, 
        Week: week, 
        Invoice_No: Invoice_No ,  
        Quantity: Quantity, 
        Unit_Price: Unit_Price, 
        Calculation: Calculation, 
        month: month,
        Total_Sale: Total_Sale,
        Total_Vat: Total_Vat,
        Total_Amount_Receivable: Total_Amount_Receivable}, (error,results)=>{
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

