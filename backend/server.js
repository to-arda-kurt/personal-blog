import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
//Connect DB
import connectDB from './db.js';

connectDB();

const app = express();
dotenv.config();

app.get('/', (req, res) => {
  res.send('Api working');
});

const PORT = process.env.PORT;
app.listen(
  PORT,
  console.log(
    `Blog Server is Running in ${process.env.NODE_ENV} mode on port ${PORT}`
      .yellow.bold
  )
);
