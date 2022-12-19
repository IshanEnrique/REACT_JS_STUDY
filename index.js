const connectToMongo = require('./db');
const express = require('express');
connectToMongo();
const app = express();
const port = 3000;

// const process=
require('dotenv').config();


app.use(express.json());
// Available Routes

// Non-Authenticated Routes

app.use('/api/v1/no-auth',require('./routes/createUser'));
app.use('/api/v1/no-auth',require('./routes/login'));


// Authenticated Routes

app.use('/api/v1/auth',require('./routes/userProfile'));
app.use('/api/notes',require('./routes/notes'));



app.get('/api/v1/login', (req, res) => {
  res.send('Hello Login');
})

app.get('/api/v1/signup', (req, res) => {
  res.send('Hello Signup');
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})