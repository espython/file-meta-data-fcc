const express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var multer = require('multer');
var cors = require('cors');
var upload = multer({ 'dest': '/upload' });
const app = express();


app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(cors());
app.set('view engine', 'ejs');

app.post('/upload', upload.single('file'), function(req, res, next) {
    res.render('file', { fileSize: req.file.size });
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});