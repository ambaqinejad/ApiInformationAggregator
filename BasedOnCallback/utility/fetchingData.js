const axios = require('axios');
const path = require('path');
module.exports = (apiInfo, saveData) => {
    
    if(apiInfo.method === 'POST') {
        axios.post(apiInfo.address, apiInfo.body)
        .then(response => saveData(response.data, apiInfo.collection))
        .catch(onReject)
    } else {
        axios.get(apiInfo.address)
        .then(response => saveData(response.data, apiInfo.collection))
        .catch(onReject)
    }
}

function onReject(error) {
    console.log(error);
    console.log("---------------------------------");
}