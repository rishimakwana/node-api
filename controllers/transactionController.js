// controllers/transactionController.js
const mongoose = require('mongoose');
const User = require('../models/UsetModal');
const Product = require('../models/ProductModel');
const Category = require('../models/CategoryModel');

async function startTransaction(req, res, next) {
    req.session = await mongoose.startSession();
    req.session.startTransaction();
    next();
}

async function commitTransaction(req, res, next) {
    try {
        await req.session.commitTransaction();
        req.session.endSession();
        res.json({ success: true, message: 'Transaction committed successfully' });
    } catch (error) {
        await req.session.abortTransaction();
        req.session.endSession();
        res.status(500).json({ success: false, message: 'Transaction aborted: ' + error.message });
    }
}

async function abortTransaction(req, res, next) {
    await req.session.abortTransaction();
    req.session.endSession();
    res.json({ success: false, message: 'Transaction aborted' });
}

module.exports = { startTransaction, commitTransaction, abortTransaction };
