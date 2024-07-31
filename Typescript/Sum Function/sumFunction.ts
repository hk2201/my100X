function tell(a: number, b: number): boolean {
    return a > b;
}

console.log(tell(1, 2));

function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(1, 2)); 


// Point to be noted ts is smart enough so it understands that if the input is number then its output should also be number so thats why even if we dont specify the return type for the function then also it will run properly (Type inference)


