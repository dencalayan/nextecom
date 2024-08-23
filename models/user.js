import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        trim: true,
        minlength: 3,
        maxlength: 20,
    },
    email: {
        type: String,
        required: true,
        index: true,
        lowercase: true,
        unique: true,
        trim: true,
        minlength: 6,
        maxlength: 200,
    },
    password:String,
    role: {
        type: String,
        default: "user", //admin
    },
    image: String,
    resetCode: {
        data: String,
        expireAt: {
            type: Date,
            default: () => new Date(Date.now() + 10 * 60 * 1000), //10 minutes in milliseconds ,
        },
    },   
}, { timestamps: true });
 
userSchema.plugin(uniqueValidator);
export default mongoose.models.User || mongoose.model("User", userSchema);