import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import SocialButtonsContainer from 'react-social-media-buttons'
const useStyle = makeStyles({
    root: {
        transition: 'all .3s linear',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 0 15px rgba(0,0,0,.4)'
        }
    }
})
const OurExpertSingle = ({ expert }) => {
    const { root } = useStyle();
    const { img, name, expertize } = expert;
    return (
        <Paper className={root}>
            <img style={{ width: '100%', borderTop: '3px solid #F2184F' }} src={img} alt="" />
            <div style={{ textAlign: 'center', padding: 10 }}>
                <Typography variant="h5" style={{ color: '#F2184F' }}>{name}</Typography>
                <Typography variant="body1" style={{ margin: '10px 0' }}>{expertize}</Typography>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <SocialButtonsContainer
                        links={['https://www.facebook.com/facebook', 'https://twitter.com/Twitter', 'https://www.instagram.com/instagram/', 'https://www.linkedin.com/company/linkedin/']}
                        buttonStyle={{ width: '30px', height: '30px', margin: '0px 6px', backgroundColor: '#000000' }}
                        iconStyle={{ color: '#ffffff' }}
                        openNewTab={true}
                    />
                </div>
            </div>
        </Paper>
    );
};

export default OurExpertSingle;