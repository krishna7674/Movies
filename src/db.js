// src/db.js

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://krishnasingh778062:ksing308@cluster0.f5dgzan.mongodb.net/subscriber?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
