import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ContrastIcon from '@mui/icons-material/Contrast';

export default function Navigation() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "white", color: "black" }}>
                <Toolbar sx={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <Typography variant="h6" component="div">
                        Where in the world?
                    </Typography>
                    <Button color="inherit" sx={{
                        display: "flex",
                        gap: "0.5rem"
                    }}>
                        <ContrastIcon />
                        Dark Mode
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}