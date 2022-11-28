import { useState } from 'react';
import { useAddTaskMutation } from '../api/api';
import {
    TextField, Button, 
    Grid
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const NewTask = () => {

    const [newTaskName, setNewTaskName] = useState("");
    const [addTask] = useAddTaskMutation();

    const handleAddNewTaskSubmit = (taskName: string) => {
        if (taskName === "") {
            return alert("task name is required!");
        };
        const newTask = {
            name: taskName,
            completed: false,
        };
        addTask(newTask);
        setNewTaskName("");
    }

    return (
        <Grid className='add-new-task-form' container>
            <Grid item className='new-task-input' xs={8} sx={{
                p: 1,
                backgroundColor: '#f1f1f1',
                height: '50px'
            }}>
                <TextField id='standard-basic' placeholder='Add new task here' variant='standard' value={newTaskName}
                    InputProps={{
                        disableUnderline: true,
                    }}
                    sx={{
                        width: '100%',
                        border: 'unset',
                    }}
                    onChange={(e) => setNewTaskName(e.currentTarget.value)}
                />
            </Grid>
            <Grid item xs={4}>
                <Button variant='contained' endIcon={<AddIcon />} sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 'unset'
                    }}
                    onClick={() => handleAddNewTaskSubmit(newTaskName)}
                >Add Task</Button>
            </Grid>
        </Grid>
    )
}

export default NewTask