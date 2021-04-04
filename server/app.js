const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const postRoutes = require('./routes/post')
require("dotenv").config();

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());


mongoose.connect(process.env.CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify : false}).then(
    console.log('Connected to DB')
).catch(err => console.log(err));

app.use('/posts',postRoutes);

const port = process.env.PORT || 8000;
app.listen(port , () => {
console.log(`Running on port ${port}`);
});
