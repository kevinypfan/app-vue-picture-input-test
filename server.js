const express = require('express');
const multer = require('multer');
const fallback = require('express-history-api-fallback');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

var upload = multer({ dest: 'upload/' });

app.post('/upload', upload.single('logo'), function(req, res, next){
  var file = req.file;
  res.send(file);
});


app.use(fallback('index.html', {root: __dirname}))

app.listen(3000, function () {
  console.log("start up post 3000");
})
