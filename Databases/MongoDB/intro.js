const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:password1234@cluster0.86drtks.mongodb.net/Users");

const User = mongoose.model('Users', {name : String, email : String, Password : String});

const newuser = new User({
    name : "Harshad",
    email : "ansjd",
    Password : "1234"
});

newuser.save();