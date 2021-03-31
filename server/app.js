const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const postRoutes = require('./routes/post')
const app = express();
app.use(bodyParser.json())
app.use(cors())


mongoose.connect("mongodb://localhost:27017/memories",{ useNewUrlParser: true, useUnifiedTopology: true })

app.use('/posts',postRoutes);

const port = 8000;
app.listen(port , () => {
console.log(`Running on port ${port}`);
});
