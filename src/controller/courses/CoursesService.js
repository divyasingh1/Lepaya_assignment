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
          let courseDetails = await getCourseById(courseId); //calling get /api/courses/{id} api
          if(courseDetails && courseDetails.learners){ // response received
              // Async loop to get details of each learner from api /api/learners/{id}
              let learners = await Promise.all(courseDetails.learners.map(async (learnerId)=>{   
                return  getLearnerById(learnerId);  
              }));
              courseDetails.learners = learners;
          }

          if(courseDetails && courseDetails.trainerId){
            // get details of trainer from api /api/trainers/{id}
            let trainer = await getTrainerDetailsById(courseDetails.trainerId);
            courseDetails.trainer = trainer;
          }
          delete courseDetails.trainerId;
          //return response
          return courseDetails;
    
       } catch(e){
          //Throw sync Error
           throw new Error(e);
       }
    }
}

module.exports = CoursesService;
