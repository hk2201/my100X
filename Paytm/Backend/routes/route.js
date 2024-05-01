// backend/routes/index.js
const express = require('express');
const userRouter = require("./user");
const accountRouter = require("./acoount");

const mainRouter = express.Router();

mainRouter.use("/user", userRouter)
mainRouter.use("/account", accountRouter)

module.exports = mainRouter;