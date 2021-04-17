import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
});

const Ratings = ({ ratingValue, setRatingValue }) => {

    const [hover, setHover] = useState(-1);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography style={{ marginRight: 10 }}>Rate us </Typography>
            <Rating
                name="hover-feedback"
                value={ratingValue}
                precision={0.5}
                onChange={(event, newValue) => {
                    setRatingValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
            />
            {ratingValue !== null && <Box ml={2}>{labels[hover !== -1 ? hover : ratingValue]}</Box>}
        </div>
    );
}
export default Ratings;