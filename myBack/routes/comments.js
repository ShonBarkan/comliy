
const express = require('express')
const {validate,Comment} = require('../Models/comments')
const router = express.Router()
const auth = require('../middlewares/auth')


//GET ALL comment 
router.get('/',async (req,res)=>{
    const comments = await Comment.find().select('name color body -_id');
    res.send(comments);
});

//ADD NEW comment 
router.post('/',auth,async (req,res)=>{

    const results = validate(req.body)
    if(results.error){
        res.status(400).send(results.error.details[0].message)
        return
    }

    let comment = new Comment({
        name: req.body.name,
        body: req.body.body
    });
    comment = await comment.save()
    res.send(comment)
});




module.exports = router ;