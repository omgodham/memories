const mongoose = require('mongoose');
const Post = require("../models/post")

exports.getPosts = async (req,res) => {
try {
    const posts = await Post.find();
    res.status(200).json(posts);
} catch (error) {
    res.status(400).json(error);
}
}

exports.createPost = async (req,res) => {
    const post = new Post(req.body);
try {
        await post.save();
        res.status(200).json(post);
    } catch (error) {
    res.status(400).json(error);
}
}

exports.getPost = async (req,res) => {
   const { id } = req.params;
    try {
        const post = await Post.findById({_id:id});
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json(error);
    }
    }

    exports.updatePost = async (req,res) => {
        const { id } = req.params;
    try {
          const updatedPost = await Post.findByIdAndUpdate(id,req.body,{new:true})
            res.status(200).json(updatedPost);
        } catch (error) {
        res.status(400).json(error);
    }
    }

    exports.deletePost = async (req,res) => {
        const { id } = req.params;
    try {
        await Post.findByIdAndDelete(id);
            res.status(200).json({message:'deleted successfully'});
        } catch (error) {
        res.status(400).json(error);
    }
    }