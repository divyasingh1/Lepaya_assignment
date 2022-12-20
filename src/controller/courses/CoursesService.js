const getCourseById = require("../../thirdPartyApis/LepayaHRApis/getCourseById")
const getLearnerById = require("../../thirdPartyApis/LepayaHRApis/getLearnerById")

class CoursesService {
    constructor() {
    }
    async getCourseDetailsById(courseId){
        let courseDetails = await getCourseById(courseId);
        courseDetails = JSON.parse(courseDetails)
        let learners = await Promise.all(courseDetails.learners.map(async (learnerId)=>{   
            return JSON.parse(await getLearnerById(learnerId));  
        }));
        courseDetails.learners = learners;
        return courseDetails;
    }
}

module.exports = CoursesService;
