const getCourseById = require("../../thirdPartyApis/LepayaHRApis/getCourseById")
const getLearnerById = require("../../thirdPartyApis/LepayaHRApis/getLearnerById")
const getTrainerDetailsById = require("../../thirdPartyApis/LepayaHRApis/getTrainerDetailsById");
const BaseService = require("../BaseService");

class CoursesService  extends BaseService{
    constructor() {
      super();
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
          delete courseDetails.trainerId;
          return courseDetails;
    
       } catch(e){
           throw new Error(e);
       }
    }
}

module.exports = CoursesService;
