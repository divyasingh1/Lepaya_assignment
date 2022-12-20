const getCourseById = require("../../thirdPartyApis/LepayaHRApis/getCourseById")
const getLearnerById = require("../../thirdPartyApis/LepayaHRApis/getLearnerById")
const getTrainerDetailsById = require("../../thirdPartyApis/LepayaHRApis/getTrainerDetailsById")

class CoursesService {
    constructor() {
    }
    async getCourseDetailsById(courseId){
        let courseDetails = await getCourseById(courseId);
        let learners = await Promise.all(courseDetails.learners.map(async (learnerId)=>{   
            return  getLearnerById(learnerId);  
        }));
        let trainer = await getTrainerDetailsById(courseDetails.trainerId);
        courseDetails.trainer = trainer;
        courseDetails.learners = learners;
        return courseDetails;
    }
}

module.exports = CoursesService;
