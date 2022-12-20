const request = require('request');

function getLearnerById(id){
    var options = {
        'method': 'GET',
        'url': process.env.LEPAYA_HR_SERVIC_URL+'/learners/'+id,
        'headers': {
        }
      };
      return new Promise((resolve, reject)=>{
        request(options, function (error, response) {
            if (error) reject(error);
            console.log(response.body);
            resolve(JSON.parse(response.body));
        });
      });
}

module.exports = getLearnerById
