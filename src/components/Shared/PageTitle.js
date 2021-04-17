import { Typography } from '@material-ui/core';
import React from 'react';
import Logout from './Logout';

const PageTitle = ({ text }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h4" style={{ color: '#F2184F', fontWeight: 700, marginBottom: 30 }}>{text}</Typography>
            <Logout />
        </div>
    )
}

export default PageTitle;