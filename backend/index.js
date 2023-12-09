const express =require('express');
const { default: mongoose } = require('mongoose');
const app=express()
const dotenv=require('dotenv')
const authRouter=require('./routes/Auth')
//database
const connectDB =async()=>{
    try{
        await mongoose.connect(process.env.MONGO_url)
        console.log("database is connected successfully")
    }
    catch(err)
    {
        console.log(err);
    }
}

//MiddleWares
dotenv.config()
app.use(express.json())
app.use("/api/auth",authRouter)
app.listen(process.env.PORT,()=>{
    connectDB()
    console.log("app is running on port "+process.env.PORT)
})
