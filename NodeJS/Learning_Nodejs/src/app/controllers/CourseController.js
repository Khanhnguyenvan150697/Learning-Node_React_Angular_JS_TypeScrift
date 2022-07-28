const Course = require('../models/Course')
const {multipleMongooseToObject} = require('../../ultil/mongoose')

class CourseController{
    show(req,res,next){
        Course.findOne({ slug: req.params.slug })
            .then(course=>{
                res.json(course)
            })
            .catch(next)
    }
}

module.exports = new CourseController()