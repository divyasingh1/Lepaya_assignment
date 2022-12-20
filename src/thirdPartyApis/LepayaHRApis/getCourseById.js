const executeRequest = require('../../utils/executeRequest');
function getCourseById(id){
  try{
      return executeRequest({url:process.env.LEPAYA_HR_SERVIC_URL+'/courses/'+id, method: "GET", headers:{}});
    } catch (e){
      throw new Error(e);
    }
}

module.exports = getCourseById
