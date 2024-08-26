const mongoose = require('mongoose');

// Define schema
const companySchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

// Define model
const Company = mongoose.model('Company', companySchema);

// Use `Company` instead of `company`
module.exports = Company;
