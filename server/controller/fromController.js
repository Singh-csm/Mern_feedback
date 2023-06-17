const formModel = require("../model/formModel")
const bcrypt = require("bcryptjs");

const createdata = async (req, res)=>{
    let {name, email, password, feedback} = req.body
    try {
        const hashPassword = await bcrypt.hash(password, 12);
        let datatoFill = await formModel.create({name, email, password: hashPassword, feedback})
        return res.status(201).send({status: true, message:"Success", data: datatoFill})
    } catch (error) {
        res.status(500).send({status:false, message:"Error creating request", error: error.message})
    }
}

module.exports.createdata = createdata;
