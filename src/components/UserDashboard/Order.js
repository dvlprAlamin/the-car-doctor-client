import { Container, ListItem, Typography } from '@material-ui/core';
import React from 'react';
import { GetContext } from '../../context';
import PageTitle from '../Shared/PageTitle';
import UserSidebar from '../Shared/Sidebar/UserSidebar';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import CreditCardIcon from '@material-ui/icons/CreditCard';
const Order = () => {
    const { selectedService } = GetContext();
    console.log(selectedService);
    const stripePromise = loadStripe('pk_test_51Igx21EC9cEhbZos93ciYpaYBEYNtdTzdlqeH7luPXmuhdFNUfE7j5QIWL6On98Nh6X2pSSCJxb2RSR2brm8aHZa00qZhejvTt');
    return (
        <>
            <UserSidebar />
            <Container style={{ padding: '20px 0 20px 200px' }}>
                <PageTitle text="Order" />

                <ListItem>
                    <Typography variant="body1">{selectedService.title}</Typography>
                </ListItem>
                <Typography variant="caption">Pay with</Typography>
                <ListItem>
                    <Typography variant="h5"><CreditCardIcon /> Credit Card</Typography>
                </ListItem>

                <div style={{ maxWidth: 600, marginTop: 20 }}>
                    <Elements stripe={stripePromise}>
                        <PaymentForm />
                    </Elements>
                </div>
            </Container>
        </>
    );
};

export default Order;