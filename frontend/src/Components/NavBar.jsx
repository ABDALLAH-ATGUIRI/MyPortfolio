import * as React from "react";
import { AppBar, Grid, Typography, Button, Container, IconButton, Toolbar, Box, Link } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

// import Logo from "../../components/global/Logo/Logo"
// import Sidebar from "./appSide.home";
// import "./appBar.css"

const pages = { Home: "/", Register: "/Register", Pruducts: "/3D-tour", Panier: "Panier" };


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(false);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleNavMenu = () => {
        anchorElNav ? setAnchorElNav(false) : setAnchorElNav(true)
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    ;

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <>
            <AppBar position="static" color="" >
                <Container maxWidth="xl" sx={{ bgcolor: "", overflow: "hidden", position: "absolute", zIndex: 100, padding: "1%" }}>
                    <Toolbar className="fex justify-between">
                        <Grid
                            direction="column"
                            justifyContent="center"
                            component="a"
                            href=""
                            sx={{
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none"
                            }}
                        >
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href=""
                                sx={{
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 500,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Logo            </Typography>
                        </Grid >
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , width:"50%" }}>
                            {Object.keys(pages).map((page) => (
                                <Link to={pages[page]} className=" mx-4 font-bold text-lg  "> {page}</Link>
                            ))}
                        </Box >

                        {/* <Box sx={{ flexGrow: 0 }}>
                            <button className="signIn">
                                <span>S'IDENTIFIER</span>
                                <div className="top"></div>
                                <div className="left"></div>
                                <div className="bottom"></div>
                                <div className="right"></div>
                            </button>
                        </Box> */}

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>

                        </Box>
                    </Toolbar>
                </Container >
            </AppBar >
            {/* <Sidebar open={anchorElNav} setOpen={handleNavMenu} /> */}
        </>



    );
}

export default ResponsiveAppBar;
