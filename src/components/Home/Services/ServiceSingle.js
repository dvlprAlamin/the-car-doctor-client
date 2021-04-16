import { Button, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import { GetContext } from '../../../context';
const ServiceSingle = ({ service }) => {
    const history = useHistory()
    const { title, fee, image, description } = service;
    const { setSelectedService } = GetContext()
    const selectServiceHandler = () => {
        setSelectedService(service)
        history.push('/order')
    }
    return (
        <Paper>
            <img src={image} alt="" width="100%" />
            <div style={{ padding: 25 }}>
                <Typography variant="h6">{title}</Typography>
                <div style={{ height: 3, width: 50, background: '#F2184F' }}></div>
                <Typography variant="h4" color="secondary" style={{ fontWeight: 700, marginTop: 10 }}>${fee}</Typography>
                <Typography variant="body1" style={{ margin: '10px 0' }}>{description}</Typography>
                <Button onClick={selectServiceHandler} variant="contained" style={{ background: '#202C45', color: '#fff' }}>Get Service </Button>
            </div>
        </Paper >
    );
};

export default ServiceSingle;