import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GetContext } from '../../context';
import Loader from '../Shared/Loader';
import PageTitle from '../Shared/PageTitle';
import UserSidebar from '../Shared/Sidebar/UserSidebar';

const MyOrder = () => {
    const { loggedInUser } = GetContext();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true)
    const email = loggedInUser?.email
    useEffect(() => {
        axios.post('https://arcane-sands-09318.herokuapp.com/orders', { email: email })
            .then(res => {
                setOrders(res.data);
                setLoading(false)
            })
    }, [email])
    console.log(orders);
    return (
        <>
            <UserSidebar />
            <Container className='sidebarContainer'>
                <PageTitle text="My Order" />
                {loading ? <Loader /> :
                    <Grid container spacing={3}>
                        {
                            orders.map(({ _id, service, fee, status, date }) =>
                                <Grid key={_id} item lg={4} sm={6} xs={12}>
                                    <Paper elevation={3} style={{ padding: 15, textAlign: 'center' }}>
                                        <Button
                                            disabled
                                            style={{ color: '#fff', background: `${status === 'Pending' ? 'red' : status === 'On going' ? 'orange' : 'green'}` }}>{status}</Button>
                                        <Typography variant="h5" style={{ fontWeight: 600 }}>{service}</Typography>
                                        <Typography variant="h6">Service charge: ${fee}</Typography>
                                        <Typography variant="body1" style={{ fontStyle: 'italic' }}>Ordered at: {new Date(date).toDateString()}</Typography>
                                    </Paper>
                                </Grid>)
                        }
                    </Grid>}
            </Container>

        </>
    );
};

export default MyOrder;