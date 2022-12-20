function isJsonString(str) {
    try {
        // return the json if str is valid
        return JSON.parse(str); 
    } catch (e) {
        // return the json if str is valid
        return false;
    }
}

module.exports = isJsonString;