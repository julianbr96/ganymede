const express = require('express');
const rootRoutes = require('./routes/root');
const searchOrderRoutes = require('./routes/searchOrder');
const app = new express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoUser = process.env.MONGO_USER || 'jbanosyrivas';
const mongoPass = process.env.MONGO_PASS || 'TxXLpmG9E9aDVLDYvkw';
const mongoDbName = process.env.MONGO_DB || 'ganymede';

mongoose
  .connect(
    `mongodb+srv://${mongoUser}:${mongoPass}@nodecourse-ohxbc.mongodb.net/${mongoDbName}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch(error => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
    process.exit(1);
  });

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use('/api/product', searchOrderRoutes);
app.use('/', rootRoutes);

module.exports = app;
