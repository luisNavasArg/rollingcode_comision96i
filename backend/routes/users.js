const {Router} = require("express")
const router = Router();
const {getUsers,createUser,updateUser,deleteUser,getOneUser,enableUser} = require("../controllers/userController")
// http://localhost:8080/api/users/createUser

router.get("/readUsers",getUsers)
router.get("/readOneUser/:id",getOneUser)
router.post("/createUser",createUser)
router.put("/updateUser/:id",updateUser)
router.delete("/deleteUser/:id",deleteUser)
router.post("/enableUser/:id",enableUser)

module.exports=router;