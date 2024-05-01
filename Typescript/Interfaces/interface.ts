interface User {
    firstName: string;
    lastName: string;
    age: number;
    email?: string // this ? states that it is an optional argument
};

function isLegal(user: User): boolean {
    if (user.age > 18) {
        return true;
    }

    return false;
}

function greet(user: User): void {
    console.log(user.firstName);
}

isLegal({
    firstName: "Harshad",
    lastName: "Khandare",
    age: 23
});