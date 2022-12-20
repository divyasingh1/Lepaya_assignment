const executeRequest = require('../../utils/executeRequest');

function getLearnerById(id){
  try {
       //using  common util method to make http calls
      return executeRequest({url:process.env.LEPAYA_HR_SERVIC_URL+'/learners/'+id, method: "GET", headers:{}});
    } catch (e){
      throw new Error(e);
    }
}

module.exports = getLearnerById
