const express = require('express');
const loanledgerController = require('../controllers/loanledgerController');
const router = express.Router();

router
  .route('/')
  .get(loanledgerController.getAllLoanledgers)
  .post(loanledgerController.createLoanledger);

router
  .route('/:id')
  .get(loanledgerController.getLoanledger)
  .patch(loanledgerController.updateLoanledger)
  .delete(loanledgerController.deleteLoanledger);

module.exports = router;
