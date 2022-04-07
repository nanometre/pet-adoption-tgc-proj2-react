import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = [{ display: "Browse", value: "browse" },
{ display: "Add Animal", value: "addAnimal" },
{ display: "Manage", value: "manageAnimals" },
{ display: "Adoption Process", value: "adoptionProcess" }];

export default function Navbar(props) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const changePage = (page) => {
        handleCloseNavMenu()
        props.setActive(page)
    }

    return (
        <AppBar position="static" >
            <Container maxWidth="false" style={{ margin: 0 }}>
                <Toolbar disableGutters>
                    <Box
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                        <img src={require('../assets/images/paw-logo.png')}
                        role='button'
                        alt="Logo"
                        style={{ height: '40px' }}
                        onClick={() => props.setActive('home')} />
                    </Box>
                    
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        PAW PALS
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.value}
                                    onClick={() => changePage(page.value)}>
                                    <Typography textAlign="center">{page.display}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <img src={require('../assets/images/paw-logo.png')}
                            role='button'
                            alt="Logo"
                            style={{ height: '40px' }}
                            onClick={() => props.setActive('home')} />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        {pages.map((page) => (
                            <Button
                                key={page.value}
                                onClick={() => changePage(page.value)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.display}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};