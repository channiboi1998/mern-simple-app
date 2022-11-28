const Task = require('../model/TaskModel');

module.exports = class TasksController {

    /***
     * The method responsible for getting all tasks from atlas db.
     */
    async getTasks(request, response) {
        try {
            let tasks = await Task.find();
            response.status(200).send({
                data: tasks
            });
        } catch(error) {
            response.status(400).send({
                message: error.message
            });
        }
    }

    /***
     * The method responsible for creating a new task
     */
    async addNewTask(request, response) {
        try {
            const newTask = await Task.create({
               name: request.body.name,
               completed: request.body.completed 
            });
            return response.status(200).json(newTask);
        } catch(error) {
            return response.status(400).send("There has been an error saving the task on the database.");
        }
    }

    /***
     * The method responsible for updating the completed status
     */
    async editTaskCompletedStatus(request, response) {
        try {
            let selectedTask = await Task.findById(request.body.id);
            selectedTask.completed = request.body.completed;
            selectedTask.save();
            return response.status(200).json(selectedTask);
        } catch(error) {
            return response.status(400).send("There has been an error when finding the task on the database.");
        }
    }
    
    /***
     * The method responsible for updating task name
     */
    async editTaskName(request, response) {
        try {
            let selectedTask = await Task.findById(request.body.id);
            selectedTask.name = request.body.name;
            selectedTask.save();
            response.status(200).json(selectedTask);
        } catch(error) {
            return response.status(400).send("There has been an error when updating the task name on the database.");
        }
    }

    /***
     * The method responsible for deleting task
     */
    async deleteTask(request, response) {
        try {
            let result = await Task.deleteOne({ _id : request.body.id });
            response.status(200).send(result);
        } catch(error) {
            console.log(error);
            return response.status(400).send("There has been an error when deleting the task on the database.");
        }
    }

}