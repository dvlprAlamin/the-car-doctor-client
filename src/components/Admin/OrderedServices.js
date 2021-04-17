import { Container, Select, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import AdminSidebar from '../Shared/Sidebar/AdminSidebar';
import PageTitle from '../Shared/PageTitle';
import axios from 'axios';
import { CreditCard } from '@material-ui/icons';

const OrderedServices = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/allOrders')
            .then(res => setOrders(res.data))
    }, []);
    const updateOrderStatusHandler = (id, status) => {
        axios.patch(`http://localhost:4000/update/${id}`, { status })
            .then(res => {
                console.log(res);
            })
    }

    return (
        <>
            <AdminSidebar />
            <Container style={{ padding: '20px 0 20px 200px' }}>
                <PageTitle text="Ordered Services" />
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Service</TableCell>
                                <TableCell>Pay with</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                            {
                                orders.map(({ _id, name, email, service, status }) =>
                                    <TableRow key={_id}>
                                        <TableCell>{name}</TableCell>
                                        <TableCell>{email}</TableCell>
                                        <TableCell>{service}</TableCell>
                                        <TableCell>
                                            <div style={{ display: 'flex', alignItems: 'center' }}><CreditCard /> <Typography variant="caption"> Credit Card</Typography> </div>
                                        </TableCell>
                                        <TableCell>
                                            <Select
                                                onChange={(e) => updateOrderStatusHandler(_id, e.target.value)}
                                                variant="standard"
                                                defaultValue={status}>
                                                <option style={{ color: 'red', cursor: 'pointer' }} value="Pending">Pending</option>
                                                <option style={{ color: 'orange', cursor: 'pointer' }} value='On going'>On going</option>
                                                <option style={{ color: 'green', cursor: 'pointer' }} value='Done'>Done</option>

                                            </Select>
                                        </TableCell>
                                    </TableRow>)
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
};

export default OrderedServices;