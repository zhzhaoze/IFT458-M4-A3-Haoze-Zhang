const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
  {
    
    loanType:{
        type: String,
        trim: true,
        enum: ['Home','Auto','Boat','Life'],
    },
    Name: {
        type: String,
        trim: true,
        maxlength: [40, 'A customer name must have less or equal then 40 characters'],
        minlength: [8, 'A customer name must have more or equal then 10 characters']
    },
    loanNumber: {
        type: Number
    },
    Amount: {
        type: Number
    },
    interestRate: {
        type: Number
    },
    loanTermYears: {
        type: Number
    },
    startDate: {
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
const Loan = mongoose.model('Loans', loanSchema);

module.exports = Loan;