const express = require("express");
const router = express.Router();

const {get,getOne, create, update, del} = require("../controllers/courseController")
//Read
router.get("/",get)
//detalle rutas parametrizadas
router.get("/:id",getOne)
//Create
router.post("/",create)
//update
router.put("/:id",update)
//delete
router.delete("/:id",del)

module.exports = router;