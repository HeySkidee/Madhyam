const express = require('express');
const connectDB = require('./db');
const postsRoute = require('./routes/posts'); // Adjust the path as necessary

const app = express();
app.use(express.json());

app.use('/api/posts', postsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
