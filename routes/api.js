var express = require('express');
var router = express.Router();

//Them model
const Distributors = require('../models/distributors')
const Fruits = require('../models/fruits')

//Api them distributor
router.post('/add-distributor', async (req, res) => {
    try {
        const data = req.body; // Lay du lieu tu body
        const newDistributors = new Distributors({
            name: data.name 
        }); //Tao mot doi tuong moi

        const result = await newDistributors.save(); //Them vao database
        if(result)
        {
            // Neu them thanh cong result != null tra ve du lieu 
            res.json({
                "status": 200,
                "messenger": "Them thanh cong",
                "data": result 
            })
        }
        else 
        {
            // Neu them khong thanh cong result != null, thong bao khong thanh cong
            res.json({
                "status": 400,
                "messenger": "Loi, them khong thanh cong",
                "data" : []
            })
        }
    } catch (error) {
         console.log(error);
    }
});

module.exports = router;