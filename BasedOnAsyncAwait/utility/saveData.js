const mongoose = require('mongoose');

module.exports = async (data, collectionName) => {
    try {
        let result = await mongoose.connection.db.collection(collectionName).insertMany([...data])
        console.log('Successfully saved.');
    } catch(err) {
        console.log('Could not to save.');
    }
    
}

function showMessage(message) {
    console.log(message);
}