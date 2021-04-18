import { Typography } from '@material-ui/core';
import React from 'react';

const SectionTitle = ({ icon, text }) => {
    return (
        <div style={{ display: 'flex', padding: '55px 0' }}>
            <img style={{ marginRight: 10 }} src={icon} alt="" />
            <div>
                <Typography variant="h4" style={{ textTransform: 'uppercase' }}>{text}</Typography>
                <div style={{ height: 3, width: 50, background: '#F2184F' }}></div>
            </div>
        </div>
    );
};

export default SectionTitle;