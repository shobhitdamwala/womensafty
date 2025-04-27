import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    mobileno: {
        required: true,
        type: String, // Use String for length validation
        validate: {
            validator: (value) => /^\d{10}$/.test(value),
            message: "Mobile number must be exactly 10 digits",
        },
    },
    email: {
        required: true,
        type: String,
        validate: {
            validator: validator.isEmail,
            message: "Invalid email address",
        },
    },
    locationDefault: {
        required: true,
        type: String,
    },
    locationLive : {
        type : String,
    }
});

const User = mongoose.model("User", userSchema);

export default User;
