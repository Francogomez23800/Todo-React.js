import React, { useCallback, useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './TodoItem.css'
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { app } from '../App'

const theme = createTheme({
    palette: {
        primary: {
            main: '#2C2C34',
        },
    },
});


function TodoItem(props) {

    const todosCompleted = props.completed

    const [isChecked, setIsChecked] = useState(todosCompleted)

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);

    };

    return (
        <li>
            <ThemeProvider theme={theme}>
                <FormControlLabel control={<Checkbox color='primary'
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    onClick={props.onComplete}
                />} />
                <p className={`p ${isChecked && "done"}`}>{props.text}</p>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton aria-label="delete" size="small" onClick={props.onDelete}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </Stack>
            </ThemeProvider>
        </li>
    )
}

export { TodoItem }