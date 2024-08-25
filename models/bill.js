<<<<<<< HEAD
const mongoose = require('mongoose');

// Define Bill schema
const billSchema = new mongoose.Schema({
    billno: { type: String, required: true },
    
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    email:{type: String, required: true},
    cart: [{ 
        name: {type: String, required: true  }, 
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
    }],
    date: { type: String,required:true },
    time: { type: String, required: true },
    totalprice: { type: Number, required: true },
    totalitems: { type: Number, required: true }
});

// Create Bill model
const Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;
=======
const mongoose = require('mongoose');

// Define Bill schema
const billSchema = new mongoose.Schema({
    billno: { type: String, required: true },
    
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    email:{type: String, required: true},
    cart: [{ 
        name: {type: String, required: true  }, 
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
    }],
    date: { type: String,required:true },
    time: { type: String, required: true },
    totalprice: { type: Number, required: true },
    totalitems: { type: Number, required: true }
});

// Create Bill model
const Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;
>>>>>>> 8c42b8bcd6b2649292e2ffe81074fbacc44bfe62
