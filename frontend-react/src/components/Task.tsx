import { useState, FocusEvent } from 'react';

import TaskInterface from '../interfaces/TaskInterface';

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

    const [taskName, setTaskName] = useState(props.task.name);
    const [editingStatus, setEditingStatus] = useState(false);

    const handleInputChange = (e: FocusEvent<HTMLInputElement>) => {
        if (e.currentTarget.value === '') {
            console.log('no value');
        } else {
            setTaskName(e.currentTarget.value);
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
                            <IconButton edge='end'>
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
                        checked={true}
                        tabIndex={-1}
                        disableRipple
                        onChange={() => console.log('one of the items status has been changed')}
                    />
                </ListItemIcon>
                {editingStatus === true ?
                    <TextField id='standard-basic' placeholder='Add new task here' variant='standard'
                        sx={{
                            width: '100%',
                            maxWidth: '300px'
                        }}
                        defaultValue={taskName}
                        onBlur={handleInputChange}>
                    </TextField>
                    :
                    <ListItemText primary={taskName}></ListItemText>
                }
            </ListItemButton>
        </ListItem>
    )
}

export default Task