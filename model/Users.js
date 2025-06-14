const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema ({
    name: String,
    challanid: Number,
    // vehicleregistration: ,
    violationtype: String,
    date: Number,
    status: String,
})

const UserModel = mongoose.model("users-fyp" , UserSchema)
module.exports = UserModel