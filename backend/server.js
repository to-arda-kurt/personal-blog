import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import userRoutes from './routes/userRoutes.js';
//Connect DB
import connectDB from './db.js';

connectDB();

const app = express();
app.use(express.json());
dotenv.config();

app.get('/', (req, res) => {
  res.send('Api working');
});

app.use('/api/user', userRoutes);

const PORT = process.env.PORT;
app.listen(
  PORT,
  console.log(
    `Blog Server is Running in ${process.env.NODE_ENV} mode on port ${PORT}`
      .yellow.bold
  )
);
