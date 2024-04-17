const express = require('express');
const router = express.Router();
const connectDB = require('../db');
const Post = require('../models/Post'); // Adjust the path as necessary

router.post('/', async (req, res) => {
    await connectDB();
    const post = new Post({
        description: req.body.description,
        // Add other fields as needed
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
