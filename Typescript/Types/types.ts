// Example 1: Unions

type StringOrNumber = string | number;

type IsBoolean = boolean;

// Corrected type definition for an array of strings
type IsArray = string[];

function print(num: StringOrNumber) {
    console.log(num);
}

function print2(name: StringOrNumber) {
    console.log(name);
}

function print3(value: IsBoolean) {
    console.log(value);
}

// Corrected print4 function to work with an array of strings
function print4(arr: IsArray) {
    arr.map((e) => {
        console.log(e);
    });
}

print(100);
print("100");

print2("Harshad Khandare");

print3(false);

// Updated the argument to match the IsArray type
print4(["harshad", "khandare", "GOAT"]);
