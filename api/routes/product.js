const express = require('express')
const { addListener } = require('process')
const router = express.Router()
const Product = require('../models/product')

//connects to Postman
router.get('/', async(req, res) => {
    res.send("Get Request")
    try{
        const product = await Product.find()
        res.json(product)
    }
    catch(err){
        res.send('Error' + err)
    }
})

router.get('/:id', async(req, res) => {
    res.send("Get Request")
    try{
        const product = await Product.findById(req.params.id)
        res.json(product)
    }
    catch(err){
        res.send('Error' + err)
    }
})

router.post('/', async(req, res) => {
    const product = new Product({
        _id: req.body._id,
        name: req.body.name,
        price: req.body.price
    })

    try{
        const a1 = await product.save()
        res.json(a1)
    }
    catch(err){
        res.send('Error' + err)
    }
})

module.exports = router