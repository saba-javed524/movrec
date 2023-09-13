import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';

const Navbar = () => {
    const pages = ['Home', 'Movie', 'TV Show', 'Pricing', 'Blog', 'Contacts'];

    return (
        <AppBar position="static" style={{ backgroundColor: 'black' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <TheaterComedyIcon fontSize='large' style={{ color: '#e4d804' }} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 800,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            fontSize: '2em'
                        }}
                    >
                        MOVREC
                    </Typography>

                    <Box justifyContent='center' alignItems='center' sx={{ flexGrow: 1, display: { md: 'flex' } }}                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{ fontSize: '1.3em', fontWeight: 800, letterSpacing: '.1rem', fontFamily: 'monospace', my: 2, mx: 2, color: 'white', display: 'block', textDecoration: "capitalize" }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <IconButton size="large" aria-label="search" color="inherit">
                        <SearchIcon fontSize='medium' style={{ color: '#e4d804', stroke: '#e4d804', strokeWidth: '1.5' }} />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar >
    );
}

export default Navbar
