const mysql = require('mysql');

//connect the node app with MySql server
const con = mysql.createConnection({
    host: process.env.HOSTNAME,
    port: 3306,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });
  
exports.create = (req,res) =>{
    console.log(req.body);

    const {Date, Week, Invoice_No, Tin, Quantity, Unit_Price, Calculation, Total_Sale} = req.body;

    con.query('SELECT Invoice_No FROM transaction WHERE Invoice_No = ?', [Invoice_No], (error, results)=>{
        if(error){
            console.log(error);
        }

        if (results.length > 0){
            return res.render('create', {
                message: 'Report already exist'
            })
        }
    });

    con.query('INSERT INTO transaction SET ?', {
        Date: Date, 
        Week: Week, 
        Invoice_No: Invoice_No , 
        Tin: Tin, 
        Quantity: Quantity, 
        Unit_Price: Unit_Price, 
        Calculation: Calculation, 
        Total_Sale: Total_Sale}, (error,results)=>{
            if(error){
                console.log(error);
            }else{
                return res.render('create',{
                    message: 'You have successfully created a report'
                })
            }
        })
}