import { useState, FocusEvent } from 'react';

import TaskInterface from '../interfaces/TaskInterface';

import { useUpdateTaskCompletedStatusMutation, useUpdateTaskNameMutation, useDeleteTaskMutation } from '../api/api';

import {
    ListItem, ListItemButton,
    ListItemIcon, ListItemText,
    Checkbox, IconButton,
    TextField
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const Task = (props: {  key: string, task: TaskInterface }) => {

    const [editingStatus, setEditingStatus] = useState(false);

    const [updateTaskCompletedStatus] = useUpdateTaskCompletedStatusMutation();
    const [updateTaskName] = useUpdateTaskNameMutation();
    const [deleteTask] = useDeleteTaskMutation();

    const handleInputChange = (e: FocusEvent<HTMLInputElement>) => {
        if (e.currentTarget.value === '') {
            console.log('no value');
        } else {    
            updateTaskName({
                name: e.currentTarget.value,
                id: props.task._id,
            });
        }
        setEditingStatus(false);
    }

    return (
        <ListItem
            secondaryAction={
                <>
                    {editingStatus === true ?
                        <IconButton edge='end' onClick={() => setEditingStatus(false)}>
                            <SaveIcon />
                        </IconButton>
                        :
                        <>
                            <IconButton onClick={() => setEditingStatus(true)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton edge='end' onClick={() => deleteTask({ id: props.task._id })}>
                                <DeleteIcon />
                            </IconButton>
                        </>
                    }
                </>
            }
            disablePadding
        >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                    <Checkbox
                        edge='start'
                        checked={props.task.completed}
                        tabIndex={-1}
                        disableRipple
                        onChange={(e) => updateTaskCompletedStatus({ id: props.task._id, completed: e.currentTarget.checked })}
                    />
                </ListItemIcon>
                {editingStatus === true ?
                    <TextField id='standard-basic' placeholder='Edit task name here' variant='standard'
                        sx={{
                            width: '100%',
                            maxWidth: '300px'
                        }}
                        defaultValue={props.task.name}
                        onBlur={handleInputChange}>
                    </TextField>
                    :
                    <ListItemText primary={props.task.name}></ListItemText>
                }
            </ListItemButton>
        </ListItem>
    )
}

export default Task