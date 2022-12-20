var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var CoursesService = require('./CoursesService');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get('/lepaya-courses/:id',async function (req, res) {
    var coursesServiceInst = new CoursesService();
    return coursesServiceInst.getCourseDetailsById(req.params.id)
        .then((data) => {
            res.send({ "status": "SUCCESS", message: "Course details fetched successfully", data});
        })
        .catch((err) => {
            res.status(500).send({ status: "Failed" , message: "Error in fetching course details", error: err});
        });
});
    

module.exports = router;