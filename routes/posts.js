const express = require('express');
const Post = require('../model/Post');

const router = express.Router();



router.get('/', async (req, res) => {
    res.send('we are on posts')
})

router.post('/', async (req, res) => {
    
    try {

        const post = new Post({
            title: req.body.title,
            description: req.body.description
        })

        // console.log(post)
    
        await post.save()
        res.status(200).send(post)
        
    } catch (error) {
        console.log(err)
        return res.status(500).send(err)

    }


})



module.exports = router;