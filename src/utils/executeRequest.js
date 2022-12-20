const request = require('request');
const isJsonString = require("./jsonParser");

function executeRequest({method, url, headers={}, body={}, query={}}) {
    try {
        const options = {
             method,
             url,
             headers
          };
          return new Promise((resolve, reject)=>{
            console.log("Request sent at for api", url, "at:", new Date());
            request(options, function (error, response) {
                if (error) {
                  console.log("Error received from api", url, "at:", new Date());        
                  reject(error);
                }
                console.log("Response received from api", url, "at:", new Date());
                let parsedResponse = isJsonString(response.body);
                let res =  parsedResponse ? parsedResponse : {};
                resolve(res);
            });
          });
        } catch (e){
            console.log("Error received from api", url, "at:", new Date());
            throw new Error(e);
        }
}

module.exports = executeRequest;