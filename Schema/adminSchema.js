import mongoose from "mongoose";
import validator from "validator";

const adminDetail = mongoose.Schema({
    mobileNo: {
        required: true,
        type: String,
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
    }
})

const Admin = mongoose.model("Admin",adminDetail);

export default Admin;