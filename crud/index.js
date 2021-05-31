var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 8080;

// koneksi ke database
var mysql = require('mysql');
var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"cobacobi"
});
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


app.use(bodyParser.json());
var server =  app.listen(port, () => {
  console.info('listening on %d', port);
});	
app.use(bodyParser.urlencoded({
  extended: true
}));
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

app.get('/', function (req, res) {
	let s = "SELECT * FROM akun";
	let query = db.query(s, (err, results)=>{
		var data = {
			data:results
		}
		res.render(__dirname+"/public/view/read.html", data);	
	});
	
});
app.get('/insert', function (req, res) {
	res.render(__dirname+"/public/view/insert.html");
});
app.get('/update', function (req, res) {
	let s = "SELECT * FROM akun WHERE id_akun='"+req.query.i+"'";
	let query = db.query(s, (err, results)=>{
		var data = {
			data:results[0]
		}
		res.render(__dirname+"/public/view/update.html", data);
	});
	
});

// insert data 
app.post("/tambah_akun", function (req, res) {
    let data = {nama_lengkap: req.body.nama_lengkap, username: req.body.username, password:req.body.password};
    let sql = "INSERT INTO akun SET ?";  
    let query = db.query(sql, data,(err, results) => {
       if (err) {
       		res.send({result:"error"});
       }else{
       		res.redirect("/");
       }
    });
});
//delete data
app.get("/hapus_akun", function (req, res) {
	 let sql = "DELETE FROM akun WHERE id_akun='"+req.query.i+"'";  
    let query = db.query(sql, (err, results) => {
       if (err) {
       		res.send({result:"error"});
       }else{
       		res.redirect("/");
       }
    });
});
//update data
app.post("/update", function (req, res) {
	let data = {nama_lengkap: req.body.nama_lengkap, username: req.body.username, password:req.body.password};
    let sql = "UPDATE akun SET ? WHERE id_akun='"+req.query.i+"'";  
    let query = db.query(sql, data,(err, results) => {
       if (err) {
       		console.log("error");
       		res.send({result:"error"});
       }else{
       		console.log("success");
       		res.redirect("/");
       }
    });	
})