const express = require('express');

const router = express.Router();

const customerController = require('../controllers/customerController');
router
  .route('/')
  .get(customerController.getAllcustomers)   // get all customer list
  .post(customerController.createCustomer);  //post func, create new customer json

router
  .route('/:id')
  .get(customerController.getCustomer)  //get customer cross :id
  .patch(customerController.updateCustomer)  //update customer, use postman(patch)
  .delete(customerController.deleteCustomer); //delete customer

module.exports = router;

/**
 * api has 4 methods
 * 
 */