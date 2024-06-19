const {Schema, model} = require("mongoose")
const CourseSchema=Schema({
    nombre:{
        type:String,
        required:[true,"Este campo es obligatorio"]
    },
    duracion:{
        type:Number,
        required:[true,"Este campo es obligatorio"]
    },
    cantAlumnos:{
        type:Number,
        required:[true,"Este campo es obligatorio"]
    }
})
module.exports=model("Course",CourseSchema)