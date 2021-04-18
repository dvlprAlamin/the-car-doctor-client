import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import ServiceSingle from './ServiceSingle';
import serviceIcon from '../../../image/icon/repair-service.png'
import Loader from '../../Shared/Loader';
import axios from 'axios';
const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('https://arcane-sands-09318.herokuapp.com/services')
            .then(res => {
                setServices(res.data);
                setLoading(false)
            })
    }, [])
    return (
        <Container style={{ minHeight: '100vh' }} id="services">
            <SectionTitle icon={serviceIcon} text={'Our Services'} />
            {loading ? <Loader /> :
                <Grid container spacing={3}>
                    {
                        services.map(service =>
                            <Grid key={service._id} item md={4} sm={6} xs={12}>
                                <ServiceSingle service={service} />
                            </Grid>)
                    }
                </Grid>}
        </Container>
    );
};

export default Services;