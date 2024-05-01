const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        msg: "Success"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await Admin.find({
        username,
        password
    })

    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            msg: "Somethings Wrong"
        })
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title: title,
        descripton: description,
        imageLink: imageLink,
        price: price
    })

    res.json({
        msg: "Success", courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({});
    res.json({
        courses : allCourses
    })
});

module.exports = router;