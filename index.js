const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors')
connectToMongo();
const app = express(); 
app.use(cors());

const port = 5000;

// const process=
require('dotenv').config();


app.use(express.json());
// Available Routes

// Non-Authenticated Routes

app.use('/api/v1/no-auth',require('./routes/createUser'));
app.use('/api/v1/no-auth',require('./routes/login'));


// Authenticated Routes

app.use('/api/v1/auth',require('./routes/userProfile'));
app.use('/api/v1/auth/notes',require('./routes/notes'));
app.use('/api/v1/auth/notes',require('./routes/createNotes'));
app.use('/api/v1/auth/notes',require('./routes/updateNotes'));
app.use('/api/v1/auth/notes',require('./routes/deleteNotes'));





app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})