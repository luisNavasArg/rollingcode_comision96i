const {Router} = require("express")
const router = Router();
// http://localhost:8080/api/auth/login
router.post("/login",(req,res)=>{
    res.send("Me hiciste un petición")

})

module.exports=router;