const mysql = require('mysql');

// Connection Pool
//database connection
let pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: 3306,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

// View Users
exports.view = (req, res) => {
  // User the connection
  pool.query('SELECT * FROM heroku_321128323da050f.transactions WHERE status = "Active"', (err, rowD) => {
    // When done with the connection, release it
    if (!err) {
      let removedUser = req.query.removed;
      res.render('viewDay', { rowD, removedUser });
    } else {
      console.log(err);
    }
    console.log('The data from transactions table: \n', rowD);
  });
}

exports.find = (req, res) => {
  let searchTerm = req.body.search;
  // User the connection
  pool.query('SELECT * FROM heroku_321128323da050f.transactions WHERE month LIKE ? OR Week LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%'], (err, rowD) => {
    if (!err) {
      res.render('viewDay', { rowD });
    } else {
      console.log(err);
    }
    console.log('The data from transactions table: \n', rowD);
  });
}