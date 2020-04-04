const express = require('express')
const router = express.Router();

router.get('/main', (req,res)=> {
    res.render('index')
});

router.get('/pagina2',(req,res)=> {
    res.render('pagina2')
});

module.exports = router;