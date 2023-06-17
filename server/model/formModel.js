const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    mobile: Number,
    feedback: String,
},{timestamps: true});

module.exports = mongoose.model("form",  formSchema)