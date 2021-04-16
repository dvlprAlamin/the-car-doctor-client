import { Button, Container, Grid, IconButton, Paper, TextField, Typography } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import axios from 'axios';
import React, { useState } from 'react';
import Loader from '../Shared/Loader';
import PageTitle from '../Shared/PageTitle';
import UserSidebar from '../Shared/Sidebar/UserSidebar';

const Review = () => {
    const [imageURL, setImageURL] = useState('');
    const [imageName, setImageName] = useState('');
    const [loading, setLoading] = useState(false);
    const handleImageUpload = event => {
        const imageData = new reviewData();
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
    console.log(reviewData);
    const handleSubmit = (e) => {
        e.preventDefault()
        const review = {
            ...reviewData,
            image: imageURL
        }
        setLoading(true);
        axios.post('http://localhost:4000/addReview', review)
            .then(res => {
                console.log(res.data);
                res.data && e.target.reset();
                setImageName('')
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
            });
    };
    return (
        <>
            <UserSidebar />
            <Container style={{ padding: '20px 0 20px 200px' }}>
                <PageTitle text="Add Service" />
                <Paper style={{ maxWidth: 800, margin: '2rem auto', padding: 20 }}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item lg={12}>
                                <TextField
                                    fullWidth
                                    name="title"
                                    onBlur={blurHandler}
                                    variant="outlined"
                                    color="text-primary"
                                    placeholder="Enter Name"
                                />
                            </Grid>
                            <Grid item lg={12}>
                                <TextField
                                    fullWidth
                                    name="fee"
                                    onBlur={blurHandler}
                                    variant="outlined"
                                    color="text-primary"
                                    placeholder="Enter Company’s name, Designation"
                                />
                            </Grid>
                            <Grid item lg={12}>
                                <textarea
                                    style={{
                                        width: '100%',
                                        padding: 15,
                                        border: '1px solid',
                                        borderColor: '#202C45',
                                        borderRadius: 3,
                                        fontSize: 18
                                    }}
                                    rows="5"
                                    name="description"
                                    onBlur={blurHandler}
                                    placeholder="Enter description"
                                />
                            </Grid>
                            <Grid item lg={12}>
                                <Typography variant="h5" component="span">Choose Photo</Typography>
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
                        </Grid>
                        <Button type="submit" disabled={loading} variant="contained" color="secondary" style={{ fontSize: 17, marginTop: 10 }}>Submit</Button>
                        {loading && <Loader />}
                    </form>
                </Paper>
            </Container>
        </>
    );
};

export default Review;