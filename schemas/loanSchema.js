//Create schema
//Student Name: Haoze Zhang
//Student Id: 1223015872
//Time: 2022.10.5
// this.rawData404 = new JSONSchemaView(this.obj);
const mongoose = require('mongoose')

const { Schema } = mongoose;

const customerSchema = new Schema({
  // String is shorthand for {type: String}
  customerName:   String,
  phoneNumber:   String,
  address:   String,
  loanAmount:   Number,
  interest:   Number,
  loanTermYears: Number,
  loanType: String,
  description:  String,
  createdDate: {type: Date, default: Date.now},
  insertedDate: {type: Date, default: Date.now}

});

//Create the Schema Definition
const Customer = mongoose.model('Customers', customerSchema);
// module.exports = Customer

console.log(Customer);
console.log(customerSchema)


