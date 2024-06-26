const { Schema, model } = require("mongoose");
const CourseSchema = Schema({
    user: {
        type:String,
        required:[true,"Este campo es obligatorio"]
    },
    email: {
        type:String,
        required:[true, "Este campo es obligatorio"]
    },
    password: {
        type:String,
        required:[true, "Este campo es obligatorio"]
    },
    admin:{
        type:Boolean,
        default:false
    },
    state:{
        type:Boolean,
        default:false
    },
    state2:{
        type:Boolean,
        default:false
    }
})
module.exports = model("User", CourseSchema)