function identity<T>(args: T): T {
    return args;
}


let a = identity<String>("Harshad");
let b = identity<number>(100);