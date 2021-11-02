//api integration of mongoose
const mongoose = require('mongoose')

//Schema and Model
const productSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    price: Number
});

module.exports = mongoose.model('Product', productSchema); 
//const myDB = 'mongodb://localhost/dbName';    file directory
//mongoose.connect(myDB);