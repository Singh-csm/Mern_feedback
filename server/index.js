const express = require("express");
const database = require("./db.js")
const routes = require("./routes/fromRoutes.js")
const cors = require('cors');
const app = express();
const port = 4000;
app.use(cors())



app.use(express.json())
database.connectDB()

app.use("/" , routes)

app.get("/success", (req, res)=>{
    res.send("all ok!")
})

app.listen(port, ()=> console.log('listening on port:', port))


