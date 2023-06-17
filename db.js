const mongoose = require('mongoose');

const connectDB = async () =>{
   await mongoose.connect("mongodb+srv://singh-csm:GIUPM5681K@singh-csm.nmfw5jk.mongodb.net/testform16", {useNewUrlParser: true});
   console.log(`mongodb connected succesfully!`)
}



module.exports.connectDB = connectDB