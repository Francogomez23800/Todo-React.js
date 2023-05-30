import React from 'react'
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { addTask } from './AddTask'
import { TodoContext } from '../TodoContext';


const Todos = []

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    '&:hover': {
                        backgroundColor: '#2C2C34',
                    },
                },
            },
        },
    },
});


function CreateTodoButton() {
    const { setTodos, setSearchValue, searchValue } = React.useContext(TodoContext)

    return (
        <ThemeProvider theme={theme}>
            <Button
                sx={{ backgroundColor: '#494850', color: '#D8D8F6' }}
                variant="contained"
                disableElevation
                onClick={() => {
                    addTask(searchValue, Todos, setSearchValue)
                    setTodos(Todos)
                }
                }
            >
                Add Todo
            </Button>
        </ThemeProvider>

    )
}

export { CreateTodoButton, Todos }