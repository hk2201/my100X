const express = require("express");

const zod = require("zod");

const app = express();


// Instead of doing manual checks we can use ZOD so that it is more optimised and better in terms of scaling out application.


const schema1 = zod.array(zod.number());

const schema2 = zod.object({
    email : zod.string(),
    password : zod.string(),
    country : zod.literal("IN").or(zod.literal("US")),
    kidneys : zod.array(zod.number())
})

app.post('/health-checkup',(req,res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);

    if(!response.success){
        res.status(411).json({
            msg : "Invalid Inputs"
        })
    }else{
        res.send(response);
    }
})