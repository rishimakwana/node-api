// routes/transaction.js
const express = require('express');
const router = express.Router();
const { startTransaction, commitTransaction, abortTransaction } = require('../controllers/transactionController');

// Your route to initiate the transaction
router.post('/createTransaction', startTransaction, (req, res) => {
    res.json({ success: true, message: 'Transaction started successfully' });
});

// Your route to commit the transaction
router.post('/commitTransaction', commitTransaction);

// Your route to abort the transaction
router.post('/abortTransaction', abortTransaction);

module.exports = router;
