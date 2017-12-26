const express = require('express');
const router = express.Router();

//Routes
router.get('/users', function(req, res, next){
    try {
        res.send(200, {message: 'Monika Users'}); 
    }
    catch(err){
        console.log('test');
        res.send(500);
    }
    
});

module.exports = router;

 