import { Button, Grid, List, ListItem, TextField, Typography } from '@material-ui/core';
import React from 'react';
import SocialButtonsContainer from 'react-social-media-buttons';
const FooterMiddle = () => {
    const subscribeFieldStyle = {
        border: 0,
        outline: 0,
        width: 'calc(100% - 120px)',
        height: 45,
        borderRadius: '5px 0 0 5px'
    }
    return (
        <Grid container spacing={3} style={{ borderTop: '1px solid #808080', paddingTop: 20 }}>
            <Grid item md={3} sm={12}>
                <Typography variant="body1" style={{ color: '#fff' }}>Call Us Now</Typography>
                <List>
                    <ListItem>
                        +61 3 1234 5678
                </ListItem>
                    <ListItem>
                        +12 3 1234 5678
                </ListItem>
                </List>
            </Grid>
            <Grid item md={3} sm={12}>
                <Typography variant="body1" style={{ color: '#fff' }}>Connect With Us</Typography>
                <List>
                    <SocialButtonsContainer
                        links={['https://www.facebook.com/facebook', 'https://twitter.com/Twitter', 'https://www.instagram.com/instagram/', 'https://www.linkedin.com/company/linkedin/', 'https://www.youtube.com']}
                        buttonStyle={{ width: '30px', height: '30px', margin: '0px 10px', backgroundColor: 'transparent', border: '1px solid #808080' }}
                        iconStyle={{ color: '#808080' }}
                        openNewTab={true}
                    />
                </List>
            </Grid>
            <Grid item md={6} sm={12}>
                <Typography variant="body1" style={{ color: '#fff' }}>Subscribe Us</Typography>
                <List style={{ display: 'flex' }}>
                    <input type="email" name="" style={subscribeFieldStyle} />
                    <Button variant="contained" color="secondary" style={{ height: 45, borderRadius: '0 5px 5px 0' }}>Subscribe</Button>
                </List>
            </Grid>
        </Grid>
    );
};

export default FooterMiddle;