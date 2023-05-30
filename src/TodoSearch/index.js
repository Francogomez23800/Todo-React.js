import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import './TodoSearch.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { TodoContext } from '../TodoContext';

const theme = createTheme({
    palette: {
        primary: {
            main: '#D8D8F6',
        },
    },
});

const ariaLabel = { 'aria-label': 'description' };

function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext)

    return (

        <ThemeProvider theme={theme}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
            >
                <Input color='primary' className='input' placeholder="Search Todo..." inputProps={ariaLabel}
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                        return searchValue
                    }} />
            </Box>
        </ThemeProvider>
    );
}

export { TodoSearch }