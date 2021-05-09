const axios = require('axios');
const path = require('path');
const saveData = require(path.join(__dirname, 'saveData.js'));

let api_info;
module.exports = async (apiInfo) => {
    try {
        api_info = apiInfo;
        let data;
        if(apiInfo.method === 'POST') {
            data = await axios.post(apiInfo.address, apiInfo.body)
        } else {
            data = await axios.get(apiInfo.address)
        }
        onResolve(data)
    } catch(err) {
        onReject(error)
    }
}

function onResolve(response) {
    saveData(response.data, api_info.collection)
}

function onReject(error) {
    console.log(error);
    console.log("---------------------------------");
}