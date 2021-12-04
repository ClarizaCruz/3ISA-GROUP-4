const mysql = require('mysql');

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
  pool.query('SELECT * FROM heroku_321128323da050f.transactions WHERE status = "Active"', (err, rows) => {
    // When done with the connection, release it
    if (!err) {
      let removedUser = req.query.removed;
      res.render('view', { rows, removedUser });
    } else {
      console.log(err);
    }
    console.log('The data from transactions table: \n', rows);
  });
}

exports.find = (req, res) => {
  let searchTerm = req.body.search;
  // User the connection
  pool.query('SELECT * FROM heroku_321128323da050f.transactions WHERE month LIKE ? OR Week LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%'], (err, rows) => {
    if (!err) {
      res.render('view', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from transactions table: \n', rows);
  });
}