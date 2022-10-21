const Loanledger = require('../models/loan_ledgerModel');
const APIFeatures = require('../dataBaseManeger/loanledgerDbContext');

exports.getAllLoanledgers =   async (req, res) => {
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(Loanledger.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const loanledgers = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: loanledgers.length,
      data: {
        loanledgers
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getLoanledger = async (req, res) => {
  try {
    const loanledgers = await Loanledger.findById(req.params.id);
    //Loan.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        loanledgers
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createLoanledger = async  (req, res) => {
  try {
    const newLoanledger = await Loanledger.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        loanledger: newLoanledger
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateLoanledger = async (req, res) => {
  try {
    const loanledger = await Loanledger.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        loanledger
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteLoanledger = async (req, res) => {
  try {
    await Loanledger.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};