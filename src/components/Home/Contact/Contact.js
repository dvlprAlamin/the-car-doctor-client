import { Button, Container, Grid, makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import contactIcon from '../../../image/icon/contact.png'

const useStyles = makeStyles((theme) => ({
    textArea: {
        width: '100%',
        border: '1px solid lightgray',
        padding: 10,
        fontFamily: 'inherit',
        fontSize: 17,
        borderRadius: 3,
        '&:hover': {
            border: '1px solid #000',
        },
        '&:focus': {
            color: '#616161',
            outline: 0,
            border: '2px solid',
            borderColor: theme.palette.primary.main
        },
        '&::placeholder': {
            opacity: .7,
        },
    },

}))
const Contact = () => {
    const { textArea } = useStyles();
    return (
        <Container style={{ marginBottom: 100 }} id="contact">
            <SectionTitle icon={contactIcon} text={'Contact Us'} />
            <Grid container spacing={3}>
                <Grid item lg={6} xs={12}>
                    <TextField
                        fullWidth
                        name="name"
                        label="Name"
                        variant="outlined"
                        color="text-primary"
                        placeholder="Enter your name"
                    />
                </Grid>
                <Grid item lg={6} xs={12}>
                    <TextField
                        fullWidth
                        name="email"
                        label="Email"
                        variant="outlined"
                        color="text-primary"
                        placeholder="Enter your email"
                    />
                </Grid>
                <Grid item lg={12} xs={12}>
                    <textarea
                        className={textArea}
                        rows={5}
                        name="message"
                        placeholder="Enter your message"
                    />
                </Grid>
                <Grid item lg={12} xs={12} style={{ textAlign: 'center' }}>
                    <Button size="large" variant="contained" style={{ background: '#202C45', color: '#fff' }}>Send Message</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Contact;