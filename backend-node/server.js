/***
 * Default Node Imports & Configs
 */
const express = require('express');
const app = express();
const server = app.listen(8000);

//const bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json());

/***
 * MongoDB Configuration.
 */
const mongoose = require('mongoose');
//The URI (can be imported on this file for security measures later).
const uri = 'mongodb+srv://chanverzosa98:AweDxz0505@todolistapp.3bbjaft.mongodb.net/?retryWrites=true&w=majority';
//Connecting to the cloud database.
mongoose.connect(uri, () => {
    console.log('connected');
}, e => console.error(e));
//Importing Task Database Model.
const Task = require('./schema-conf/Task');

/***
 * CORS Configuration.
 */
var cors = require('cors');
app.use(cors());

/***
 * REST API's.
 */
//Creating this route just for creating a default route on the backend.
app.get('/', function(request, response) {
    response.status(200).send('Home: Backend API');
});
//Route for fetching tasks
app.get('/tasks', async function(request, response) {
    try {
        let tasks = await Task.find();
        response.status(200).send({
            data: tasks
        });
    } catch(error) {
        console.log(error);
        response.status(400).send({
            message: error.message
        })
    }
});
//Route for adding a new task
app.post('/tasks', async function(request, response) {
    console.log(request.body);
    response.status(200).send('done');
});
