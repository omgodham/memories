const mongoose  = require('mongoose');
const express = require('express');
const router = express.Router();

const {getPosts, createPost ,likePost,updatePost,deletePost} = require("../controllers/post");

router.get('/',getPosts);
router.post('/',createPost);
router.patch('/likePost/:id',likePost);
router.patch('/:id',updatePost);
router.delete('/:id',deletePost);

module.exports = router;

