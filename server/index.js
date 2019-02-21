const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.set('port', 3000);
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../public')));



app.listen(app.get('port'), () => {
  console.log(`listening on port ${app.get('port')}`);
});
