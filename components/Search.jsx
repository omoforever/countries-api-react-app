import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Search() {
    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, maxWidth: "50ch" } }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Search" variant="outlined" fullWidth />
        </Box>
    );
}