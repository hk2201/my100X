// Below is an object
const users = {
  myName: "harsad",
  gender: "male",
  height: 170,
};

const users2 = {
  myName: "Macintosh",
  gender: "Female",
  height: 120,
};

// so while sending data we stringy so that universally anyone can understand
const user = JSON.stringify(users);
console.log(user);

const user2 = JSON.stringify(users2);

//to convert the string to JSON

const newUser = JSON.parse(user);
// console.log(newUser["myName"]); // below is same
console.log(newUser.myName);
