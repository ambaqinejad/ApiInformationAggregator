const cron = require('node-cron');
const path = require('path');
const fetchAndSaveData = require(path.join(__dirname, 'fetchingData'));
const timezone = 'America/New_York';

module.exports = (apisInfo) => {
    for (const apiInfo of apisInfo) {
        cron.schedule(`${apiInfo.time.second} ${apiInfo.time.minute} ${apiInfo.time.hour} * * *`, async() => {
            for (const api of apiInfo.apis) {
                await fetchAndSaveData(api)
            }
        }, 
        {
            scheduled: true,
            timezone
        })
    }
}