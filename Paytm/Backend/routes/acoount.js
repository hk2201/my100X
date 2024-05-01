// backend/routes/account.js
const express = require('express');
const { authMiddleware } = require("../Middleware/middleware");
const { Account } = require("../DB/db");
const Mongoose = require("mongoose");

const router = express.Router();

router.get('/balance', authMiddleware, async (req, res) => {
    const acc = await Account.findOne({
        userId: req.userId
    })

    res.json({
        balance: acc.balance
    })
})

router.post('/transfer', authMiddleware, async (req, res) => {
    const session = await Mongoose.startSession();

    session.startTransaction();

    const { amount, to } = req.body;

    const account = await Account.findOne({ userId: req.userId }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();

        return res.status(400).json({
            message: "Insufficient Balance"
        })
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();

        return res.status(400).json({
            message: "Payee does not exist"
        })
    }

    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    await session.commitTransaction();
    res.json({
        message: "Transaction Completed"
    })
})

module.exports = router;