function something(){
    var p = new Promise(function(resolve){
        resolve("Hi there");
    });

    return p;
}

async function main(){
    var ans = await something();

    console.log(ans);
}

main();