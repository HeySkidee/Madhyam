// server/routes/posts.js
const express = require('express');
const router = express.Router();
const connectDB = require('../db'); // Adjust the path as necessary

router.post('/', async (req, res) => {
 const db = await connectDB();
 const result = await db.collection('posts').insertOne(req.body);
 res.json(result.ops[0]);
});

module.exports = router;
