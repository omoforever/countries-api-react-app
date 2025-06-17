import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Search({ search, setSearch }) {
    return (
        <Box
            component="form"
            sx={{ width: "20rem", maxWidth: "100%" }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Search"
                variant="outlined"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                fullWidth />
        </Box>
    );
}