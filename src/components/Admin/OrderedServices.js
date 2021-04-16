import { Container, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core';
import React from 'react';
import AdminSidebar from '../Shared/Sidebar/AdminSidebar';
import PageTitle from '../Shared/PageTitle';

const OrderedServices = () => {

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
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Service</TableCell>
                                <TableCell>Pay with</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
};

export default OrderedServices;