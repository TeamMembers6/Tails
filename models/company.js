
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
    
   
const company = mongoose.model('Company', companySchema);
