const mongoose = require('mongoose');
const momentTimezone = require('moment-timezone');
const postSchema = mongoose.Schema({

title:String,
message:String,
creator:String,
tags:String,
selectedFile:String,
likeCount : {
    type:Number,
    default:0
},
createdAt:{
    type:Date,
    default:momentTimezone().tz('Asia/India').format() //this will give error but will give time also
}
});

module.exports = mongoose.model('Post',postSchema);