const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
  {
    Name: {
        type: String,
        unique: true,
        trim: true,
        maxlength: [40, 'A customer name must have less or equal then 40 characters'],
        minlength: [8, 'A customer name must have more or equal then 10 characters']
     
    },
    FirstName:{
        type: String
    },
    MiddleName: {
        type: String
    },
    LastName: {
        type: String
    },
    DateOfBirth: {
        type: String
    },
    Gender: {
        type: String
    },
    CreatedDate: {
        type: Date,
        default: Date.now
    },
    ModifiedDate: {
        type: Date,
        default: Date.now
    },
    IsDeleted: {
        type: Boolean,
        default: false,
        select: true

    },

});
const customer = mongoose.model('customers', customerSchema);

module.exports = customer;