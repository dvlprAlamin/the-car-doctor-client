import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../image/logo.png'
import logoBlack from '../../image/logo-black.png'
import { animateScroll as scroll, Link as ScrollLink } from 'react-scroll';
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
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
            display: 'none'
        },
    },
    navbarMain: {
        position: 'fixed',
        width: '100%',
        justifyContent: 'space-between',
        zIndex: 999,
        background: '#202C45',
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
    navItemActive: {
        borderColor: '#F2184F',
        color: '#F2184F',
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

const scrollNavItems = [
    {
        label: 'Services',
        path: 'services'
    },
    {
        label: 'Achievement',
        path: 'achievement'
    },
    {
        label: 'Contact',
        path: 'contact'
    },
]

const Navigation = () => {
    const {
        root,
        appBar,
        menuButton,
        drawerPaper,
        navbar,
        navItem,
        link,
        navItemDrawer,
        navbarMain } = useStyles()
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    // animated scroll
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    const drawer = (
        <div style={{ textAlign: 'center' }}>
            <img src={logoBlack} onClick={toggleHome} style={{ maxWidth: '90%', margin: '20px auto' }} alt="Logo" />
            <Divider />
            <Link to='/' className={link}>
                <ListItem button
                    className={navItemDrawer}
                >
                    <ListItemText primary={'Home'} />
                </ListItem>
            </Link>
            <Divider />
            {
                scrollNavItems.map(({ label, path }) =>
                    <ScrollLink key={label} className={link} to={path}
                        spy={true}
                        smooth={true}
                        exact='true'
                        offset={-15}
                        duration={500}>
                        <ListItem button
                            className={navItemDrawer}
                        >
                            <ListItemText primary={label} />
                        </ListItem>
                        <Divider />
                    </ScrollLink>)
            }
            {/* <ScrollLink href='#services' className={link}>
                <ListItem button
                    className={navItemDrawer}
                >
                    <ListItemText primary={'Services'} />
                </ListItem>
            </ScrollLink>
            <Divider />
            <ScrollLink href='#achievement' className={link}>
                <ListItem button
                    className={navItemDrawer}
                >
                    <ListItemText primary={'Achievement'} />
                </ListItem>
            </ScrollLink>
            <Divider />
            <ScrollLink href='#contact' className={link}>
                <ListItem button
                    className={navItemDrawer}
                >
                    <ListItemText primary={'Contact'} />
                </ListItem>
            </ScrollLink>
            <Divider /> */}
            <Link to='/order' className={link}>
                <ListItem button
                    className={navItemDrawer}
                >
                    <ListItemText primary={'Dashboard'} />
                </ListItem>
            </Link>
            <Divider />
        </div>
    );
    return (
        <div className={root}>


            <nav className={navbarMain}>

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
                <Container className={navbar} style={{ minHeight: 64 }}>
                    <img src={logo} onClick={toggleHome} style={{ maxWidth: 250, flex: 1, cursor: 'pointer' }} alt="Logo" />
                    <div style={{ flex: 3, textAlign: 'right' }}>
                        <span>
                            <Link className={link} to='/'>
                                <Button onClick={toggleHome}>
                                    <span className={navItem}>Home</span>
                                </Button>
                            </Link>

                            {
                                scrollNavItems.map(({ label, path }) =>
                                    <ScrollLink key={label} className={link} to={path}
                                        spy={true}
                                        smooth={true}
                                        exact='true'
                                        offset={-15}
                                        duration={500}>
                                        <Button>
                                            <span className={navItem}>{label}</span>
                                        </Button>
                                    </ScrollLink>)
                            }
                            {/* <ScrollLink className={link} to='services'
                                spy={true}
                                smooth={true}
                                exact='true'
                                offset={20}
                                duration={500}>
                                <Button>
                                    <span className={navItem}>Services</span>
                                </Button>
                            </ScrollLink>
                            <ScrollLink className={link} to='achievement'
                                spy={true}
                                smooth={true}
                                exact='true'
                                offset={20}
                                duration={500}
                            >
                                <Button>
                                    <span className={navItem}>Achievement</span>
                                </Button>
                            </ScrollLink>
                            <ScrollLink className={link} to='contact'
                                spy={true}
                                smooth={true}
                                exact='true'
                                offset={20}
                                duration={500}>
                                <Button>
                                    <span className={navItem}>Contact</span>
                                </Button>
                            </ScrollLink> */}
                            <Link className={link} to='/order'>
                                <Button>
                                    <span className={navItem}>Dashboard</span>
                                </Button>
                            </Link>
                        </span>
                    </div>
                </Container>
            </nav>

        </div>
    );
}


export default Navigation;