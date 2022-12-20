var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
app.use(express.json())

var coursesController = require('./controller/courses/CoursesRoutes');

app.use('/api', coursesController);


module.exports = app;