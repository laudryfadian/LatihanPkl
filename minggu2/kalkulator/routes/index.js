var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kalkulator' });
});

router.get('/tes', function (req, res, next) {
  res.render('gg', { title: 'Ganjil Genap'});
});

router.get('/bergelut', function (req, res, next) {
  res.render('gelut/gelut', { title: 'Arena Gelut'});
});

router.get('/bergelut/login', function (req, res, next) {
  res.render('gelut/login', { title: 'Login Gelut'});
});

router.get('/bergelut/daftar', function (req, res, next) {
  res.render('gelut/daftar', { title: 'Daftar Gelut'});
});

router.get('/kalkulator2', function (req, res, next) {
  res.render('kalku2/index', { title: 'Kalkulator 2.0'});
});

router.get('/:operator/:num1/:num2', function(req,res){
	
	var operator = req.params.operator
	var num1 = parseInt(req.params.num1);
	var num2 = parseInt(req.params.num2);
	var result;

	switch(operator){
		case "addition":
		result = add(num1, num2);
		break;

		case "subtraction":
		result = subtract(num1, num2);
		break;

		case "multiplication":
		result = multiply(num1, num2);
		break;

		case "division":
		result = divide(num1, num2);
		break;

		default:
		result = "Sorry, please enter a valid operator!"
	}

	function add(a, b){
		return a + b
	}

	function subtract(a, b){
		return a - b
	}

	function multiply(a, b){
		return a * b
	}

	function divide(a, b){
		return a / b
	}

	res.json(result);
	
});

router.get('/status',
  (req, res, next) => {
    return next(new Error('Contoh Error'));
    res.json({
      status: true,
      code: 200,
      message: 'Status OK. Running...',
      data: {},
    })
  }
)



module.exports = router;
