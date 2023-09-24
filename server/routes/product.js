var express = require('express');
var router = express.Router();
const { poolPromise } = require('./../config/db');

/* GET product listing. */
router.get('/', async(req, res, next) => {
  try {
    // const pool = await poolPromise
    // const result = await pool.request()
    //     // .input('input_parameter', sql.Int, req.query.input_parameter)
    //     .query('select * from mytable where id = @input_parameter')      

    // res.json(result.recordset)
    res.json({
      status: 200,
      data: [
        {
          "id": 1,
          "name": "Product 1",
          "description": "Description for Product 1",
          "price": 19.99,
          "imageUrl": "https://example.com/images/product1.jpg"
        },
        {
          "id": 2,
          "name": "Product 2",
          "description": "Description for Product 2",
          "price": 24.99,
          "imageUrl": "https://example.com/images/product2.jpg"
        },
        {
          "id": 3,
          "name": "Product 3",
          "description": "Description for Product 3",
          "price": 14.99,
          "imageUrl": "https://example.com/images/product3.jpg"
        },
        {
          "id": 4,
          "name": "Product 4",
          "description": "Description for Product 4",
          "price": 29.99,
          "imageUrl": "https://example.com/images/product4.jpg"
        },
        {
          "id": 5,
          "name": "Product 5",
          "description": "Description for Product 5",
          "price": 39.99,
          "imageUrl": "https://example.com/images/product5.jpg"
        }
      ]
      
    })
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
});

module.exports = router;
