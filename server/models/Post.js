// server/models/Post.js
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
 description: {
    type: String,
    required: true,
 },
 // Add other fields as needed
});

module.exports = mongoose.model('Post', PostSchema);
