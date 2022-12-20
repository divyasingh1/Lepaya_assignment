const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const CoursesService = require('./CoursesService');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get('/lepaya-courses/:id',async function (req, res) {
    const coursesServiceInst = new CoursesService();
    return coursesServiceInst.getCourseDetailsById(req.params.id)
        .then((data) => {
            if(data && data.statusCode){
              res.status(data.statusCode).send(data);
            } else {
              res.status(200).send(data);
            }
        })
        .catch((err) => {
            res.status(500).send({ status: "FAILED" , message: "Error in fetching course details", error: err});
        });
});
    

module.exports = router;