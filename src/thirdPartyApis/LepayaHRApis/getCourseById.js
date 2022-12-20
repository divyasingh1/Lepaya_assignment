const request = require('request');

function getCourseById(id){
    const options = {
        'method': 'GET',
        'url': process.env.LEPAYA_HR_SERVIC_URL+'/courses/'+id,
        'headers': {
        }
      };
      return new Promise((resolve, reject)=>{
        request(options, function (error, response) {
            if (error) reject(error);
            console.log("Response received");
            resolve(JSON.parse(response.body));
        });
      });
}

module.exports = getCourseById
