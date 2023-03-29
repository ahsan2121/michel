import mongoose from "mongoose";

// create a table for User 
const  user = new mongoose.Schema({
    // 1st Columns
    name: {type: String , default: "Ahsan" , require: true},
    about: {type: String }
});

const UserModel = mongoose.model("User", user);

export default UserModel;