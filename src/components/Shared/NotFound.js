import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '50vh' }}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h2">Page not found</Typography>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => history.push('/')}
            >Go Back</Button>
        </div>
    );
};

export default NotFound;