const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const routeTasks = require('./src/routes/tasks');

app.use(bodyParser.json());

// Enable CORS for the React app
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.use('/api/tasks', routeTasks);

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`listening on ${port}`);
