const {Router} = require("express")
const router = Router();
// http://localhost:8080/api/users/createUser

router.get("/readUsers",(req,res)=>{
    res.send("Estás haciendo la petición get a usuarios")
})
router.post("/createUser",(req,res)=>{
    res.send("Estás haciendo la petición post a usuarios")
})
router.put("/updateUser",(req,res)=>{
    res.send("Estás haciendo la petición put a usuarios")
})
router.delete("/deleteUser",(req,res)=>{
    res.send("Estás haciendo la petición delete a usuarios")
})

module.exports=router;