import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    firstname : {
        type: String,
        required: true,
        maxlength : 50,
        minlength: 2
    },
    lastname: {
        type: String,
        required: true,
        maxlength : 50,
        minlength: 2
    },
    phone: {
        type: String,
        required: true,
        unique: true
    }
})
const userModel = mongoose.model("users", userSchema, "users")
export default userModel