const express = require("express");
const app = express();

app.use(express.json());

const users = [{
    name : "john",
    kidneys :[{
        healthy : false,
        
    },{
        healthy : false,
        
    },{
        
        healthy : true,
        
    },{
        healthy : true
    }]
}];

app.get('/', (req,res) => {
    
    const johnkidneys = users[0].kidneys;
    const numberofkidneys = johnkidneys.length;
    let healthykidneys = 0;
    johnkidneys.filter((i) => {
        if(i.healthy === true){
            healthykidneys = healthykidneys + 1;
            
        }
        
    });

    const unhealthykidneys = numberofkidneys - healthykidneys;

    res.json({
        numberofkidneys,
        healthykidneys,
        unhealthykidneys
    })
})


app.post('/', (req,res) => {
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        health : ishealthy
    })

    res.json({msg : "DONE"})

})

app.put('/', (req,res) => {
    const johnkidneys = users[0].kidneys;

    johnkidneys.filter((i) => {
        if(i.healthy === false){
            i.healthy = true;
        }
    })

    res.json({
        msg : "DONE"
    })
})

app.delete('/', (req,res) => {
    // const johnkidneys = ;

    users[0].kidneys = users[0].kidneys.filter((i) => {
       return i.healthy  !== false
    })

    res.json({
        msg : "DONE"
    })
})

app.listen(3000);