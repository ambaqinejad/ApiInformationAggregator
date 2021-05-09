const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ApiAggregator',{ 
    useNewUrlParser: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        return console.log('App could not to connect to Mongodb');
    }
    console.log('App connected to Mongodb successfully');
})