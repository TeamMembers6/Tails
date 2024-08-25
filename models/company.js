<<<<<<< HEAD

const mongoose = require('mongoose');

// Define the user schema
const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Password must be at least 8 characters long']
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    match: [/^\d{10}$/, 'Mobile number must be 10 digits long']
  }
});
// Create a model using the schema
=======

const mongoose = require('mongoose');

// Define the user schema
const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Password must be at least 8 characters long']
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    match: [/^\d{10}$/, 'Mobile number must be 10 digits long']
  }
});
// Create a model using the schema
>>>>>>> ecd0562752d7844b33e48da3447256a8ffa34cc1
const company = mongoose.model('Company', companySchema);