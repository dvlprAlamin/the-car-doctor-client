import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Container, Typography, Grid } from '@material-ui/core';
import SectionTitle from '../../Shared/SectionTitle';
import titleIcon from '../../../image/icon/customer-review.png'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import axios from 'axios';
import Rating from '@material-ui/lab/Rating';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('https://arcane-sands-09318.herokuapp.com/reviews')
            .then(res => setReviews(res.data))
    }, [])
    return (
        <Container style={{ marginBottom: 50 }}>
            <SectionTitle icon={titleIcon} text={"WHAT CLIENTS SAY ?"} />
            <Carousel
                animation="slide"
            >
                {
                    reviews.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </Container>
    );
};
const Item = ({ item }) => {
    const { description, name, designation, image, ratingValue } = item;
    return (
        <>
            <div style={{ background: '#202C45' }}>
                <FormatQuoteIcon style={{ transform: 'rotate(180deg)', fontSize: 100, color: '#fff' }} />
                <Typography variant="body1" style={{ color: '#fff', padding: '0 20px 30px 20px' }}>{description}</Typography>
            </div>
            <Grid container>
                <Grid item lg={4} style={{ textAlign: 'right', margin: 'auto' }}>
                    <Typography variant="h5" color="secondary">{name}</Typography>
                    <Typography variant="h6">{designation}</Typography>
                </Grid>
                <Grid item lg={4} style={{ textAlign: 'center' }}>
                    <img src={image} style={{ borderRadius: '50%', margin: '10px 0', height: 200, width: 200, objectFit: 'cover' }} alt="" />
                </Grid>
                <Grid item lg={4} style={{ margin: 'auto' }}>
                    <div>
                        <Rating name="read-only" precision={0.5} value={ratingValue} readOnly />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
export default Testimonial;
