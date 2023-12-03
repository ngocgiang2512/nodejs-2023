const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080')
});