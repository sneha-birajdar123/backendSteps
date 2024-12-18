
import express from "express"
import config from "config"

import "./utils/dbConnect.js";

import userRouter from "./controllers/users/index.js"
// import adminRouter from "./controllers/admin/index.js"
// import staffRouter from "./controllers/staff/index.js"


const app = express()
const PORT = config.get("PORT")
app.use(express.json())


app.get("/", (req, res) => {
    try{
    res.status(200).json({msg: "Hello World"})
    }catch(error){
        console.log(error)
    }
})

app.use("/api/user", userRouter)
// app.use("/api/admin", adminRouter)
// app.use("/api/staff", staffRouter)
app.listen(PORT, () => {
    console.log(`server is up and running at ${PORT}`)
})

