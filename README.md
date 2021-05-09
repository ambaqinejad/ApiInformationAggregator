# ApiInformationAggregator

This project aims to get information from some apis at a specific time periodically and insert their informational into a mongodb database.

Below packages have been used in this project:

- mongoose (An ODM that have been used to insert api information into mongodb)
- node-cron (A package that you can use to run some code at a specific time periodically)
- axios (A package for working with http methods)

### Project Structure

##### Data Folder

The metadata for api information that includes:

- Time that some apis should be called
- An array that contains apis information like (method of api (get / post), collection name that result should be saved in it, address of the api, the body of the request if method is POST)

##### Utility Folder

- dbConnection (For connecting our application to mongodb database)
- fetchingData (For sending request to api and getting information. In callback version the save callback is also in this module)
- saveData (Just in Async / Await version, that save fetched information into the mongodb database)
- schedular (Create a period plan for calling apis)

##### App.js File

- The entrance of the application

#### How to run

##### Async / Await version

1. cd BasedOnAsyncAwait
2. npm install
3. npm start

##### Callback version

1. cd BasedOnCallback
2. npm install
3. npm start
