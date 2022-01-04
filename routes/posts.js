const express = require('express');
const req = require('express/lib/request');
const Post = require('../model/Post');

const router = express.Router();



router.get('/', async (req, res) => {
    try {
        
        const posts = await Post.find();
        res.status(200).json(posts)

    } catch (error) {
        res.status(500).json({message: error})
    }
})

router.post('/', async (req, res) => {
    
    try {

        const post = new Post({
            title: req.body.title,
            description: req.body.description
        })

        // console.log(post)
    
        const data =await post.save()
        res.status(200).json(data)
        
    } catch (error) {
        console.log(error)
        res.json({message: error})

    }


})

//specific post
router.get('/:postId', async(req, res) =>{

    try {
        const post = await Post.findById(req.params.postId)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({message: error})
    }
})

//Delete post
router.delete("/:postId", async(req, res) =>{
    try { 
        const removedPost= await Post.remove({_id: req.params.postId });
        res.status(200).json({message: "Post Remove Successfully."});

    } catch (error) {
        res.status(500).json({message: error})
    }
})

//update a post 
router.patch("/:postId", async (req, res) =>{
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { title: req.body.title }}
            );
        
        res.status(200).json(updatedPost)

    } catch (error) {
        res.status(500).json({message: error})
    }
})


module.exports = router;