const express = require("express");

const app = express();

function bodyy(req,res){
    // something

    next();
}

// this is a middleware and this will be called for every route first by default.
app.use(bodyy());

function userMiddleware(req, res, next) {
    if (username != "harshad" && password != "pass") {
        res.status(403).json({
            msg: "Incorrect Inputs"
        });
    } else {
        next();
    }
}


function kidneyMiddleware(req, res, next) {
    if (kidneyId > 2 || kidneyId == 0 || kidneyId < 0) {
        res.status(403).json({
            msg: "Incorrect Inputs",
        })
    } else {
        next();
    }
}



app.get('/health-checkup', userMiddleware, kidneyMiddleware, (req, res) => {
    res.send("Your heart is healthy");
});


// is theres something after the routes with err as an para then that is global catch whenever there will be error/exeption in the route it will not give details of our code base but send what we have defined below.
app.use((err,req,res,next) => {
    res.json({
        msg : "Something is wrong"
    })
})