// backend/routes/user.js
const express = require('express');
const zod = require("zod");
const { User, Account } = require("../DB/db")
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const router = express.Router();
const { authMiddleware } = require("../Middleware/middleware");


const signupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
})

const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})


router.post('/signup', async (req, res) => {
    const body = req.body;
    const { success } = signupSchema.safeParse(body);

    if (!success) {
        return res.json({
            msg: "Email already taken / Incorrect inputs"
        })
    }

    const existinguser = await User.findOne({
        username: body.username
    })

    if (existinguser) {
        return res.status(411).json({
            msg: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.create({
        username: body.username,
        password: body.password,
        firstName: body.firstName,
        lastName: body.lastName
    })

    const userId = user._id;

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created Successfully",
        token: token
    })


})

router.post('/signin', async (req, res) => {
    const body = req.body;

    const { success } = signinSchema.safeParse(body);

    if (!success) {
        return res.status(411).json({
            message: "Incorrect Inputs"
        })
    }

    const user = await User.findOne({
        username: body.username,
        password: body.password
    })

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);

        res.json({
            token: token
        })

        return;
    }

    res.status(411).json({
        message: "Error while logging in"
    })



})

router.put("/", async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne({ _id: req.userId }, req.body);

    res.json({
        message: "Updated successfully"
    })
})

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})


module.exports = router;