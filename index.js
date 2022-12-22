require("dotenv").config()
const PORT=process.env.PORT
const express=require("express")
const connect=require("./config/db")
const productRoute=require("./src/prduct/product.router")
const userRoute=require("./src/user/user.router")
const cartRoute=require("./src/cart/cart.router")
const cors=require("cors")



const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json()) 
app.use(cors())




app.use("/users",userRoute)
 app.use("/product",productRoute)
 app.use("/cart",cartRoute);




app.listen(PORT,async()=>{
    await connect()
    console.log("server is running")
})
