const executeRequest = require('../../utils/executeRequest');

function getTrainerDetailsById(id){
  try{
      return executeRequest({url:process.env.LEPAYA_HR_SERVIC_URL+'/trainers/'+id, method: "GET", headers:{}});
    } catch (e){
      throw new Error(e);
    }
}

module.exports = getTrainerDetailsById
