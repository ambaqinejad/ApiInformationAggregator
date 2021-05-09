// Importing Modules
const path = require('path');
const scheduler = require(path.join(__dirname, 'utility', 'scheduler'));
require(path.join(__dirname, 'utility', 'dbConnection.js'))
/**
 * Defining an array that specifies apis, name of their mongodb collection, 
 * and the time that they should be called
 */
const apisInfo = require(path.join(__dirname, 'data', 'apisInfo.js'));
scheduler(apisInfo)