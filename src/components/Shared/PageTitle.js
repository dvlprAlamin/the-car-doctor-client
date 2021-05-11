import { Avatar, Typography } from '@material-ui/core';
import React from 'react';
import { GetContext } from '../../context';
import Logout from './Logout';

const PageTitle = ({ text }) => {
    const { loggedInUser } = GetContext();
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h4" style={{ color: '#F2184F', fontWeight: 700, marginBottom: 30 }}>{text}</Typography>
            {/* <Logout /> */}
            <Avatar src={loggedInUser.photoURL} />
        </div>
    )
}

export default PageTitle;