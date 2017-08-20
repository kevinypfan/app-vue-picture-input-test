const express = require('express');
const multer = require('multer');
const morgan = require('morgan');
const fallback = require('express-history-api-fallback');
const bodyParser = require('body-parser');

var upload = multer({ dest: 'uploads/' })
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(morgan('combined'))

app.post('/profile', upload.single('logo'), function (req, res) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log('file=',req.file, '|body=', req.body)
  res.send("sussece");
})



app.use(fallback('index.html', {root: __dirname}))

app.listen(3000, function () {
  console.log("start up post 3000");
})
