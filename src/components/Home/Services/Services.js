import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import ServiceSingle from './ServiceSingle';
import serviceIcon from '../../../image/icon/repair-service.png'
import axios from 'axios';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/services')
            .then(res => setServices(res.data))
    }, [])
    return (
        <Container id="services">
            <SectionTitle icon={serviceIcon} text={'Our Services'} />
            <Grid container spacing={3}>
                {
                    services.map(service =>
                        <Grid key={service._id} item md={4} sm={6} xs={12}>
                            <ServiceSingle service={service} />
                        </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default Services;