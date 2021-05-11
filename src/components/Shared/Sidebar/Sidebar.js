import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from '../../../image/logo.png'
import { Home } from '@material-ui/icons';
import Logout from '../Logout';
const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
    },
    sidebarItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '.8rem 0',
        paddingLeft: '10%',
        opacity: .8,
        transition: '.3s linear',
        borderRight: '4px solid transparent',
        '&:hover': {
            opacity: 1,
            borderColor: theme.palette.secondary.main,
            color: theme.palette.secondary.main,
        },

    },
    active: {
        opacity: 1,
        borderColor: theme.palette.secondary.main,
        color: theme.palette.secondary.main,
    },
    sidebarIcon: {
        color: theme.palette.secondary.main,
        marginRight: 10,
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
        [theme.breakpoints.down('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
            display: 'none'
        },
    },
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: '100%',
            display: 'none',
        },
        background: "#202C45",
        boxShadow: 'none'
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
        background: '#202C45'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


const Sidebar = ({ sidebarItems }) => {
    const { pathname } = useLocation();
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <div>
                <Link to='/'><img src={logo} style={{ maxWidth: '90%', margin: '20px auto' }} alt="Logo" /></Link>
                <Divider />
                <Link to='/' className={classes.link}>
                    <ListItem button className={classes.sidebarItem} >
                        <Home className={classes.sidebarIcon} />
                        <ListItemText primary={'Home'} />
                    </ListItem>
                </Link>
                <Divider />
                {
                    sidebarItems.map(({ label, route, Icon }, i) =>
                        <Link to={route} className={classes.link}>
                            <ListItem button className={`${classes.sidebarItem} ${pathname === route && classes.active}`} >
                                <Icon className={classes.sidebarIcon} />
                                <ListItemText primary={label} />
                            </ListItem>
                        </Link>)
                }
            </div>

            <Logout />
        </div>
    );
    return (
        <div className={classes.root}>
            <AppBar
                className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer}>
                <Hidden mdUp implementation="css">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}


export default Sidebar;