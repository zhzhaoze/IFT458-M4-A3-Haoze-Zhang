const mongoose = require('mongoose');

const loanledgerSchema = new mongoose.Schema(
  {
    Payment_Amount: {
        type: Number,
        trim: true
    },
    Name: {
        type: String,
        trim: true,
        maxlength: [40, 'A customer name must have less or equal then 40 characters'],
        minlength: [8, 'A customer name must have more or equal then 10 characters']
    },
    interest:{
        type: Number
    },
    principal: {
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
const Loanledgers = mongoose.model('loanledgers', loanledgerSchema);

module.exports = Loanledgers;