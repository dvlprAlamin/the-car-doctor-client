import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        top: '50vh',
        left: '50%',
        transform: 'translateX(-50%)'
    },
});

const Loader = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CircularProgress color="secondary" />
        </div>
    );
}
export default Loader;
