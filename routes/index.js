var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let customer = [
    {name: 'TDED', age: 27},
    {name: 'DONG', age: 25},
    {name: 'DEN', age: 18},
    {name: 'Pare', age: 20},
    {name: 'Guy', age: 21}
  ]
  res.render('index', {customer : customer});
});

router.get('/login', (req, res) =>{
  res.render('login')
})

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/login', (req, res) =>{
  let user = req.body['username']
  let pass = req.body['password']

  let result = 'Not found'

  if(user == 'admin' && pass == '1234'){
    result = 'success'
  }

  res.render('loginResult', {result : result})
})

router.post('/register', (req, res) =>{
  var params = {
    name: req.body['name'],
    email: req.body['email'],
    phone: req.body['phone']
  }

  res.render('registerResult' , params)
})

router.get('/search', (req, res) => {
  res.render('search')
})

router.post('/search', (req, res) => {
  var params = {
    data: req.body['data']
  }

  res.render('showData', params)
})

module.exports = router;
