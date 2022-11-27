import {
    Box, Typography
} from '@mui/material';
import NewTask from './components/NewTask';
import TasksList from './components/TasksList';

function App() {

    return (
        <Box className='todo-list-container'>
            <Typography variant='h1' gutterBottom sx={{ fontSize: '20px', p: 2, textTransform: 'uppercase' }}>
                Simple task list application
            </Typography>
            <TasksList />
            <NewTask />
        </Box>
    );
}

export default App;