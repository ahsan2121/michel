import mongoose from "mongoose";

const Card = new mongoose.Schema({
    name: {type: String, require: true},
    image: {type: String, require: true}
})

// Number 
// String 
// Boolean