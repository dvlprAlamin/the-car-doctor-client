import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Container, Typography, Grid } from '@material-ui/core';
import SectionTitle from '../../Shared/SectionTitle';
import titleIcon from '../../../image/icon/customer-review.png'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import reviewImg from '../../../image/review.jpg'
import StarRoundedIcon from '@material-ui/icons/StarRounded';
const items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    },
]
const Testimonial = () => {
    return (
        <Container style={{ marginBottom: 100 }}>
            <SectionTitle icon={titleIcon} text={"WHAT CLIENTS SAY ?"} />
            <Carousel
                animation="slide"
            // indicators={false}
            >
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </Container>
    );
};
const Item = props => {
    return (
        <>
            <div style={{ background: '#202C45' }}>
                <FormatQuoteIcon style={{ transform: 'rotate(180deg)', fontSize: 100, color: '#fff' }} />
                <Typography variant="body1" style={{ color: '#fff', padding: '0 20px 30px 20px' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aliquam repellat? Repudiandae quaerat rem alias id deserunt, incidunt laboriosam cum necessitatibus, velit fugit rerum eaque? Quae itaque voluptatibus id laudantium! </Typography>
            </div>
            <Grid container>
                <Grid item lg={4} style={{ textAlign: 'right', margin: 'auto' }}>
                    <Typography variant="h5" color="secondary">Jonathan Smith</Typography>
                    <Typography variant="h6">cici inc.</Typography>
                </Grid>
                <Grid item lg={4} style={{ textAlign: 'center' }}>
                    <img src={reviewImg} style={{ borderRadius: '50%', margin: '10px 0' }} width="200" alt="" />
                </Grid>
                <Grid item lg={4} style={{ margin: 'auto' }}>
                    <div>
                        <StarRoundedIcon />
                        <StarRoundedIcon />
                        <StarRoundedIcon />
                        <StarRoundedIcon />
                        <StarRoundedIcon />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
export default Testimonial;
