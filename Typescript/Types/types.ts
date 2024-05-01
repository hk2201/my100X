// They are very similar to interfaces just that there are some tweeks in their use cases

// Example 1 . Unions

type StringorNumber = string | number;

function print(num: StringorNumber) {
    console.log(num);
}

print(100);
print("100");