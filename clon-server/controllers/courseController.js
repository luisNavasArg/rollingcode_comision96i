const Course = require("../models/course")
let courses=[]
let id=0;
const get=async(req,res)=>{
    let coursesAll = await Course.find({})
    return res.status(200).json({coursesAll})
}
const getOne=async(req,res)=>{
    let {id}=req.params;
    let course = await Course.findById({_id:id})
    return res.status(200).json({course})
}
const create=async(req,res)=>{
  
    const course=req.body;
    const newCourse = new Course(course);
    await newCourse.save();
    return res.status(201).json({msg:"curso creado con éxito",course:newCourse})


}
const update=async(req,res)=>{
    let {id}=req.params
    let obj = req.body;
    let course = await Course.findByIdAndUpdate(id,obj,{new:true})
    return res.send({course})
}
const del=(req,res)=>{
    let {id}=req.params
    let newCourses = courses.filter(course=>course.id!=id)
    courses=newCourses;
    return res.status(202).json({courses})
}
module.exports={
    get,getOne,create,update,del
}
