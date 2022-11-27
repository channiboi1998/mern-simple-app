/***
 * Default Node Imports & Configs
 */
require('dotenv').config({path: './config.env'});

const express = require('express');
const app = express();

const port = process.env.PORT || 5000;
app.listen(port);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/***
 * MongoDB Configuration.
 */
const mongoose = require('mongoose');

//The URI (can be imported on this file for security measures later).
const uri = process.env.ATLAS_URI;

//Connecting to the cloud database.
mongoose.connect(uri, () => {
    console.log('connected');
}, e => console.error(e));

/***
 * CORS Configuration.
 */
var cors = require('cors');
app.use(cors());

/***
 * This is where you insert and import your routes
 */
 app.use('/', require('./routes/TasksRoutes'));