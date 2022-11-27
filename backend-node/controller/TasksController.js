const Task = require('../schema-conf/Task');

module.exports = class TasksController {

    async getTasks(request, response) {
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
    }

    async addNewTask(request, response) {
        console.log("request body is:", request.body);
        response.status(200).send("from controller done.");
    }

}