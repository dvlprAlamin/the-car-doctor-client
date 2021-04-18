import { Button, Container, Grid, ListItem, Paper, Radio, Select, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { GetContext } from '../../context';
import PageTitle from '../Shared/PageTitle';
import UserSidebar from '../Shared/Sidebar/UserSidebar';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import axios from 'axios';
import { useHistory } from 'react-router';
const Order = () => {
    const history = useHistory();
    const { selectedService, loggedInUser, paymentSuccess, setSelectedService } = GetContext();
    const stripePromise = loadStripe('pk_test_51Igx21EC9cEhbZos93ciYpaYBEYNtdTzdlqeH7luPXmuhdFNUfE7j5QIWL6On98Nh6X2pSSCJxb2RSR2brm8aHZa00qZhejvTt');
    const [paymentOrderToggler, setPaymentOrderToggler] = useState(false)
    const [services, setServices] = useState([]);
    useEffect(() => {
        axios.get('https://arcane-sands-09318.herokuapp.com/services')
            .then(res => setServices(res.data))
    }, [])
    const selectedServiceHandler = title => {
        axios.get(`https://arcane-sands-09318.herokuapp.com/service/${title}`)
            .then(res => setSelectedService(res.data[0]))
    }


    const orderSubmitHandler = () => {
        const orderData = {
            name: loggedInUser.displayName,
            email: loggedInUser.email,
            service: selectedService.title,
            fee: selectedService.fee,
            paymentId: paymentSuccess,
            status: 'Pending',
            date: new Date()
        };
        console.log(orderData);

        axios.post('https://arcane-sands-09318.herokuapp.com/addOrder', orderData)
            .then(res => {
                if (res.data) {
                    // history.push('/my-order');
                    setPaymentOrderToggler(false)
                }
            })
    }
    return (
        <>
            <UserSidebar />
            <Container style={{ padding: '20px 0 20px 200px' }}>
                <PageTitle text="Order" />
                <Paper elevation={3} style={{ maxWidth: 800, margin: '20px auto', padding: 20 }}>
                    <Grid container spacing={3}>
                        <Grid item lg={12}>
                            <Typography variant="h5">Name</Typography>
                            <TextField fullWidth variant="outlined" defaultValue={loggedInUser.displayName} />
                        </Grid>
                        <Grid item lg={12}>
                            <Typography variant="h5">Email</Typography>
                            <TextField fullWidth variant="outlined" defaultValue={loggedInUser.email} />
                        </Grid>
                        <Grid item lg={12}>
                            <Typography variant="h5">Service</Typography>
                            <Select
                                fullWidth
                                variant="outlined"
                                defaultValue={selectedService.title}
                                onChange={(e) => selectedServiceHandler(e.target.value)}
                            >
                                {
                                    services.map(({ title, _id }) => <option key={_id} style={{ cursor: 'pointer', padding: 10, borderBottom: '1px solid lightgray' }} value={title}>{title}</option>)
                                }
                            </Select>
                        </Grid>
                        <Grid item lg={12}>
                            <Typography variant="caption">Pay with</Typography>
                            <Typography variant="h5"><Radio checked /><CreditCardIcon /> Credit Card</Typography>
                        </Grid>
                        <Grid item lg={12}>
                            <Elements stripe={stripePromise}>
                                <PaymentForm
                                    paymentOrderToggler={paymentOrderToggler}
                                    setPaymentOrderToggler={setPaymentOrderToggler}
                                />
                            </Elements>
                        </Grid>
                    </Grid>
                    <div style={{ textAlign: 'center' }}>
                        <Button
                            onClick={orderSubmitHandler}
                            disabled={!paymentOrderToggler}
                            style={{ marginTop: 20 }}
                            variant="contained"
                            color="secondary">
                            Place Order</Button>
                    </div>
                </Paper>
            </Container>
        </>
    );
};

export default Order;