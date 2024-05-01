
// well funcToCall is the callback function.
function sum (a,b, funcToCall){
    let res = a + b;

    funcToCall(res);
}

function displayResult(data){
    console.log("Displaying Data in formal way " + data);
}

function displayResultUnique(data){
    console.log("Displaying Data in Unique way " + data);
}

const ans = sum(1,2,displayResult);

