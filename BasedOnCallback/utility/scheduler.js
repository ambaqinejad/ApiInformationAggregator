const cron = require('node-cron');
const mongoose = require('mongoose');
const path = require('path');
const fetchAndSaveData = require(path.join(__dirname, 'fetchingData'));
const timezone = 'America/New_York';

module.exports = (apisInfo) => {
    for (const apiInfo of apisInfo) {
        cron.schedule(`${apiInfo.time.second} ${apiInfo.time.minute} ${apiInfo.time.hour} * * *`, async() => {
            for (const api of apiInfo.apis) {
                fetchAndSaveData(api, saveData)
            }
        }, 
        {
            scheduled: true,
            timezone
        })
    }
}

function saveData(data, collectionName) {
    if(!Array.isArray(data)) {
        data = [data]
    }
    mongoose.connection.db.collection(collectionName).insertMany(data, (err, result) => {
        if (err) {
            showMessage('Something went wrong.')
        } else {
            showMessage('Added Successfully.')
        }
    })
}

function showMessage(message) {
    console.log(message);
}