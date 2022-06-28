import {Schema, model} from "mongoose";


const userSchema = new Schema ({
    username: {type: String, required: true},
    firstName: String,
    lastName:String,
    password:{type: String, required: true},
    created_at:{type: Date, default: Date.now}
})

module.exports = model('User', userSchema)