import { Button, Container, Grid, IconButton, Paper, TextField, Typography } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import axios from 'axios';
import React, { useState } from 'react';
import Loader from '../Shared/Loader';
import PageTitle from '../Shared/PageTitle';
import UserSidebar from '../Shared/Sidebar/UserSidebar';
import Ratings from './Ratings';

const Review = () => {
    const [imageURL, setImageURL] = useState('');
    const [imageName, setImageName] = useState('');
    const [ratingValue, setRatingValue] = useState(0);
    const [loading, setLoading] = useState(false);
    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'f722e3d0ff6c21590defd11ada10cc8b');
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(response => {
                setImageURL(response.data.data.display_url);
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
            });
        setImageName(event.target.files[0].name);
    }
    const [reviewData, setReviewData] = useState({})
    const blurHandler = (e) => {
        const newReviewData = { ...reviewData }
        newReviewData[e.target.name] = e.target.value;
        setReviewData(newReviewData);

    }
    console.log(ratingValue);
    const handleSubmit = (e) => {
        e.preventDefault()
        const review = {
            ...reviewData,
            ratingValue,
            image: imageURL
        }
        setLoading(true);
        axios.post('https://arcane-sands-09318.herokuapp.com/addReview', review)
            .then(res => {
                console.log(res.data);
                res.data && e.target.reset();
                setImageName('')
                setRatingValue(0)
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
            });
    };
    return (
        <>
            <UserSidebar />
            <Container className='sidebarContainer'>
                <PageTitle text="Review" />
                <Paper style={{ maxWidth: 800, margin: '2rem auto', padding: 20 }}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item lg={12} xs={12}>
                                <TextField
                                    fullWidth
                                    name="name"
                                    onBlur={blurHandler}
                                    variant="outlined"
                                    color="text-primary"
                                    placeholder="Enter Name"
                                />
                            </Grid>
                            <Grid item lg={12} xs={12}>
                                <TextField
                                    fullWidth
                                    name="designation"
                                    onBlur={blurHandler}
                                    variant="outlined"
                                    color="text-primary"
                                    placeholder="Enter designation, Company’s name"
                                />
                            </Grid>
                            <Grid item lg={12} xs={12}>
                                <textarea
                                    style={{
                                        width: '100%',
                                        border: '1px solid #ccc',
                                        padding: 12,
                                        fontFamily: 'inherit',
                                        fontSize: 17,
                                        borderRadius: 3,
                                    }}
                                    rows="5"
                                    name="description"
                                    onBlur={blurHandler}
                                    placeholder="Enter description"
                                />
                            </Grid>
                            <Grid item lg={12} xs={12}>
                                <Typography variant="body1" component="span">Choose Photo</Typography>
                                <input
                                    style={{ display: 'none' }}
                                    id="icon-button-file"
                                    type="file" name="imageURL"
                                    onChange={(e) => {
                                        handleImageUpload(e);
                                        setLoading(true);
                                    }} />
                                {loading && <Loader />}
                                <label htmlFor="icon-button-file">

                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <PhotoCamera />
                                    </IconButton>
                                    <span>{imageName}</span>
                                </label>
                            </Grid>
                            <Grid item lg={12} xs={12}>
                                <Ratings
                                    ratingValue={ratingValue}
                                    setRatingValue={setRatingValue}
                                />
                            </Grid>
                        </Grid>
                        <Button type="submit" disabled={loading} variant="contained" color="secondary" style={{ fontSize: 17, marginTop: 30 }}>Submit</Button>
                        {loading && <Loader />}
                    </form>
                </Paper>
            </Container>
        </>
    );
};

export default Review;