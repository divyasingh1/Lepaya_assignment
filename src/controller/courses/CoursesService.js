const getCourseById = require("../../thirdPartyApis/LepayaHRApis/getCourseById")
const getLearnerById = require("../../thirdPartyApis/LepayaHRApis/getLearnerById")

class CoursesService {
    constructor() {
    }
    async getCourseDetailsById(courseId){
        let courseDetails = await getCourseById(courseId);
        courseDetails = JSON.parse(courseDetails)
        return courseDetails;
    }
}

module.exports = CoursesService;
