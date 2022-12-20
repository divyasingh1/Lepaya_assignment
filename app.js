const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
//Router file
const coursesController = require('./src/controller/courses/CoursesRoutes');
//We can put an auth middleware right over here to authenticate apis
app.use('/api', coursesController);

module.exports = app;