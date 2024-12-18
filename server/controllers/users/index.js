import express from "express"
import mongoose from "mongoose"
const router = express.Router()

import userModel from "../../models/Users/Users.js"

router.get("/getallusers", (req, res) => {
    try{
        console.log("Get all users")
        res.status(200).json({msg: "get all users"})
    }catch(error){
        console.log(error)
        res.status(500).json({msg: error})
    }
})

router.post("/register", async (req, res ) => {
    try{
        let userData = req.body
        console.log(userData)
        await userModel.create(userData)
        res.status(200).json({msg: "user registered  successfully"})

    }catch(error){
        console.log(error)
        res.status(500).json({msg: error})
    }
})

export default router