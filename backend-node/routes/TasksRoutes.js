/** Import `Express` Module **/
const express = require('express');
/** Use `Express-Router` Functionality **/
const Router = express.Router();
/** Import Controller **/
const Controller = require('../controller/TasksController');
/** Create an Instance of Controller to be used on creating routes **/
const TasksController = new Controller();

Router.get('/tasks', TasksController.getTasks.bind(TasksController));
Router.post('/tasks', TasksController.addNewTask.bind(TasksController));
Router.patch('/tasks', TasksController.editTaskCompletedStatus.bind(TasksController));
Router.put('/tasks/(:id)', TasksController.editTaskName.bind(TasksController));
Router.delete('/tasks/(:id)', TasksController.deleteTask.bind(TasksController));

module.exports = Router;