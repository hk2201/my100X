interface User {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
}

type UpdateProps = Pick<User, 'name' | 'age' | 'email'> // Picking out only items that i need but mostly interface user does the job

type updatePropsOptional = Partial<UpdateProps> // If i want to make them optional

function updateUser(data: UpdateProps) {
    // Do your changes here
}

// Corrected function call
updateUser({ name: "Harshad", age: "12", email: "hk@example.com" });
