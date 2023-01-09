
const mongoose = require('mongoose')
const Joi = require('joi')

const Comment = new mongoose.model('Comment', new mongoose.Schema({
    name:{
        type: String,
        required : true,
        minlength: 3 ,
        maxlength: 50
    },
    body:{
        type: String,
        required : true,
        minlength: 3 ,
        maxlength: 100
    }
}) ) ;


function validateComment(comment){
    const schema = {
        name: Joi.string().min(3).max(50).required(),
        body: Joi.string().min(3).max(100).required()
    };
    return Joi.validate(comment,schema)
}

exports.Comment= Comment;
exports.validate = validateComment

 



