const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const coursesController = require('./src/controller/courses/CoursesRoutes');
app.use('/api', coursesController);

module.exports = app;