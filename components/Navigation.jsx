import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ContrastIcon from '@mui/icons-material/Contrast';
import Link from 'next/link';

export default function Navigation() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "white", color: "black" }}>
                <Toolbar sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginInline: "2rem"
                }}>
                    <Typography component="div" sx={{
                        fontFamily: 'var(--font-nunito-sans), sans-serif',
                        fontWeight: 800,
                        fontSize: "1.5rem"
                    }}>
                        <Link href="/">
                            Where in the world?
                        </Link>
                    </Typography>
                    <Button color="inherit" sx={{
                        display: "flex",
                        gap: "0.5rem",
                        fontFamily: 'var(--font-nunito-sans), sans-serif',
                        fontWeight: 300
                    }}>
                        <ContrastIcon />
                        Dark Mode
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}