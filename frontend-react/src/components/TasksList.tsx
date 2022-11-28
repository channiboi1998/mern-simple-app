import { useGetTasksQuery } from '../api/api';
import TaskInterface from '../interfaces/TaskInterface';

import {
    List
} from '@mui/material';

import Task from './Task';

const TasksList = () => {

    const {
        data: tasks,
        isLoading,
        isSuccess,
        isError
    } = useGetTasksQuery('tasks');

    let data = {
        status: 'idle',
        content: '',
    };

    if (isLoading) {
        data.status = 'pending';
        data.content = 'is loading .....';
    } else if (isSuccess) {
        data.status = 'fulfilled';
        data.content = tasks.data.map((task:TaskInterface) => {
            return (
                <Task key={task._id} task={task}></Task>
            )
        })
    } else if (isError) {
        data.status = 'rejected';
        data.content = 'There has been an issue regarding your request.';
    }

    return (
        <List sx={{ width: '100%' }}>
           {data.content ? data.content : 'N/A'}
        </List>
    )
}

export default TasksList