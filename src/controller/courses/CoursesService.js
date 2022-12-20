const getCourseById = require("../../thirdPartyApis/LepayaHRApis/getCourseById")
const getLearnerById = require("../../thirdPartyApis/LepayaHRApis/getLearnerById")
const getTrainerDetailsById = require("../../thirdPartyApis/LepayaHRApis/getTrainerDetailsById")

class CoursesService {
    constructor() {
    }
    async getCourseDetailsById(courseId){
        try{
          let courseDetails = await getCourseById(courseId);
          if(courseDetails && courseDetails.learners){
              let learners = await Promise.all(courseDetails.learners.map(async (learnerId)=>{   
                return  getLearnerById(learnerId);  
              }));
              courseDetails.learners = learners;
          }

          if(courseDetails && courseDetails.trainerId){
            let trainer = await getTrainerDetailsById(courseDetails.trainerId);
            courseDetails.trainer = trainer;
          }
          return courseDetails;
    
       } catch(e){
           throw new Error(e);
       }
    }
}

module.exports = CoursesService;
