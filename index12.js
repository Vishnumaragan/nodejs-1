//router
import express from "express"
const app = express()
app.listen(8080,()=>console.log("Server started"))
const userRouter = express.Router()
const productRouter = express.Router()
userRouter.get("/",(req,res)=>{
res.send("This is get request of user router")
})
userRouter.post("/",(req,res)=>{
res.send("This is post request of user router")
})
productRouter.get("/",(req,res)=>{
res.send("This is get request of product router")
})
productRouter.post("/",(req,res)=>{
res.send("This is post request of product router")
})
app.use("/api/users",userRouter)
app.use("/api/products",productRouter)

