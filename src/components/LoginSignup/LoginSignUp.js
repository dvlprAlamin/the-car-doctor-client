import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { GetContext } from '../../context';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function LoginSignUp() {
    const classes = useStyles();
    const { signUp, login, googleSignIn } = GetContext();
    const history = useHistory();
    const location = useLocation();
    const { pathname } = location;
    const { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const onBlurHandler = (e) => {
        const newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }
    const signUpHandler = async e => {
        e.preventDefault();
        try {
            setError('')
            setLoading(true)
            await signUp(user.email, user.password)
            history.replace(from)
        } catch {
            setError('Failed to create account')
        }
        setLoading(false)
    }
    const loginHandler = async e => {
        e.preventDefault();
        try {
            setError('')
            setLoading(true)
            await login(user.email, user.password)
            history.replace(from)
        } catch {
            setError('Failed to login')
        }
        setLoading(false)
    }
    const googleSignInHandler = async () => {
        try {
            setError('')
            setLoading(true)
            await googleSignIn();
            history.replace(from)
        } catch (error) {
            setError('Failed to login')
        }
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper elevation={3} style={{ padding: 15, margin: '20px auto' }}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {pathname === '/signup' ? 'Sign up' : 'Log in'}
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            {pathname === '/signup' &&
                                <>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="fname"
                                            name="firstName"
                                            variant="standard"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="standard"
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="lname"
                                        />
                                    </Grid>
                                </>}
                            <Grid item xs={12}>
                                <TextField
                                    onBlur={onBlurHandler}
                                    variant="standard"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onBlur={onBlurHandler}
                                    variant="standard"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                {pathname === '/signup' ? <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I accept all terms and condition"
                                /> : <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />}

                            </Grid>
                        </Grid>
                        {pathname === '/signup' ?
                            <Button
                                disable={loading}
                                onClick={signUpHandler}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button> :
                            <Button
                                onClick={loginHandler}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                            >
                                Log In
                            </Button>}
                    </form>
                    {pathname === '/signup' ?
                        <span>Already have an account? <Link to="/login">
                            Log in
            </Link></span> :
                        <span>Don't have an account? <Link to="/signup">
                            Sign Up
            </Link></span>}
                    <Button style={{ marginTop: 10 }} onClick={googleSignInHandler} variant="contained">Continue with Google</Button>
                </div>
            </Paper>
        </Container>
    );
}