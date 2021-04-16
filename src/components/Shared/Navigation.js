import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../image/logo.png'
import logoBlack from '../../image/logo-black.png'
const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        background: '#202C45',
        height: 64
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
    },
    navLogoText: {
        color: theme.palette.primary.main,
        textAlign: 'center',
        margin: '1rem .3rem'
    },
    logoImg: {
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
            display: 'none'
        },
    },
    navbar: {
        [theme.breakpoints.down('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
            display: 'none'
        },
        display: 'flex',
        alignItems: 'center',
    },
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: '100%',
            display: 'none',
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    navItem: {
        borderBottom: '2px solid transparent',
        color: '#fff',
        transition: '.3s',
        '&:hover': {
            borderColor: '#F2184F',
            color: '#F2184F',
        }
    },
    navItemDrawer: {
        display: 'flex',
        alignItems: 'center',
        transition: '.3s linear',
        color: '#202C45',
        borderRight: '4px solid transparent',
        '&:hover': {
            borderColor: '#F2184F',
            color: '#F2184F',
        },
    }
}));

const Navigation = () => {
    const isAdmin = false;
    const navItemData = [
        {
            label: 'Home',
            route: '/'
        },
        {
            label: 'Services',
            route: ''
        },
        {
            label: 'Contact',
            route: ''
        },
        {
            label: 'Dashboard',
            route: `${isAdmin ? '/ordered-services' : '/order'}`
        },
    ]
    const { root, appBar, menuButton, drawerPaper, navbar, navItem, link, navItemDrawer } = useStyles()
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ textAlign: 'center' }}>
            <img src={logoBlack} style={{ maxWidth: '90%', margin: '20px auto' }} alt="Logo" />
            <Divider />
            {
                navItemData.map(({ label, route }, i) =>
                    <>
                        <Link key={i} to={route} className={link}>
                            <ListItem button
                                className={navItemDrawer}
                            >
                                <ListItemText primary={label} />
                            </ListItem>
                        </Link>
                        <Divider />
                    </>
                )}
        </div>
    );
    return (
        <div className={root}>
            <AppBar
                className={appBar}
                style={{ background: '#202C45' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <nav>
                <Hidden mdUp implementation="css">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>

            <Container className={navbar} style={{ minHeight: 64 }}>
                <img src={logo} style={{ maxWidth: 250, flex: 1 }} alt="Logo" />
                <div style={{ flex: 3, textAlign: 'right' }}>
                    <span>
                        {
                            navItemData.map(({ label, route }) =>
                                <Link
                                    key={label}
                                    className={link}
                                    to={route}
                                    style={{ margin: '0 15px' }}
                                >
                                    <Button>
                                        <span className={navItem}>{label}</span>
                                    </Button>
                                </Link>)
                        }
                    </span>
                </div>
            </Container>
        </div>
    );
}


export default Navigation;