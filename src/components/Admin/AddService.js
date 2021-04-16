import { Button, Container, Grid, IconButton, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from 'axios';
import React, { useState } from 'react';
import Loader from '../Shared/Loader';
import AdminSidebar from '../Shared/Sidebar/AdminSidebar';
import PageTitle from '../Shared/PageTitle';
const useStyles = makeStyles((theme) => ({
    title: {
        marginBottom: 20,
        marginTop: 0,
        fontWeight: 700,
        color: '#F2184F',
        fontSize: 'calc(1vmax + 20px)',
        '@media(max-width:960px)': {
            margin: '2rem 0',
        }
    },
    fieldItem: {
        width: '100%',
        padding: 'calc(1vmax + 5px)',
        border: '1px solid',
        borderColor: '#202C45',
        borderRadius: 3,
        fontSize: 'calc(1vmax + 5px)',
        '&:focus': {
            color: '#616161',
            outline: 0
        }
    },
    fieldLabel: {
        color: '#202C45',
        fontSize: 'calc(1vmax + 10px)',
        fontWeight: 600
    }
}))

const AddService = () => {
    const { fieldLabel, fieldItem, title } = useStyles();
    const [imageURL, setImageURL] = useState('');
    const [imageName, setImageName] = useState('');
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
    const [formData, setFormData] = useState({})
    const blurHandler = (e) => {
        const newFormData = { ...formData }
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);

    }
    console.log(imageURL);
    const handleSubmit = (e) => {
        e.preventDefault()
        const serviceData = {
            ...formData,
            image: imageURL
        }
        console.log(serviceData);
        setLoading(true);
        axios.post('http://localhost:4000/addService', serviceData)
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
            <AdminSidebar />
            <Container style={{ padding: '20px 0 20px 200px' }}>
                <PageTitle text="Add Service" />
                <Paper style={{ maxWidth: 800, margin: '2rem auto', padding: 20 }}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item lg={6}>
                                <Typography variant="h5">Service Title</Typography>
                                <TextField
                                    fullWidth
                                    name="title"
                                    onBlur={blurHandler}
                                    variant="outlined"
                                    color="text-primary"
                                    placeholder="Enter service title"
                                />
                            </Grid>
                            <Grid item lg={6}>
                                <Typography variant="h5">Service Fee</Typography>
                                <TextField
                                    fullWidth
                                    name="fee"
                                    onBlur={blurHandler}
                                    variant="outlined"
                                    color="text-primary"
                                    placeholder="Enter service Fee"
                                />
                            </Grid>
                            <Grid item lg={6}>
                                <Typography variant="h5">Description</Typography>
                                <textarea
                                    className={fieldItem}
                                    name="description"
                                    onBlur={blurHandler}
                                    placeholder="Enter service description"
                                />
                            </Grid>
                            <Grid item lg={6}>
                                <Typography variant="h5">Upload Image</Typography>
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
                                    <Button
                                        component='span'
                                        variant="contained"
                                        color="default"
                                        startIcon={<CloudUploadIcon />}
                                    >Upload</Button>
                                    <span>{imageName}</span>
                                </label>
                            </Grid>
                        </Grid>
                        <Button type="submit" disabled={loading} variant="contained" color="secondary" style={{ fontSize: 17, marginTop: 10 }}>Save</Button>
                        {loading && <Loader />}
                    </form>
                </Paper>
            </Container>
        </>
    );
};
export default AddService;