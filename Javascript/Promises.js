function something(){
    let p = new Promise(function(resolve) {
        resolve("Hi I am here");
    });

    return p;
}

function main (){
    something().then(function(value) {
        console.log(value);
    });
}

main();