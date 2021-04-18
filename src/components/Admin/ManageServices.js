import { Button, Container, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from '../Shared/Loader';
import AdminSidebar from '../Shared/Sidebar/AdminSidebar';
import PageTitle from '../Shared/PageTitle';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true)
    const [processing, setProcessing] = useState(false)
    useEffect(() => {
        axios.get('https://arcane-sands-09318.herokuapp.com/services')
            .then(res => {
                setServices(res.data);
                setLoading(false)
            })
    }, [services]);
    const deleteServiceHandler = id => {
        setProcessing(true)
        axios.delete(`https://arcane-sands-09318.herokuapp.com/delete/${id}`)
            .then(res => {
                res.data && setProcessing(false)
            })
    }
    return (
        <>
            <AdminSidebar />
            {loading ? <Loader /> :
                <Container style={{ padding: '20px 0 20px 200px' }}>
                    <PageTitle text="Manage Services" />
                    <TableContainer>
                        <Table width="100%">
                            <TableBody>
                                <TableRow>
                                    <TableCell>Serial No</TableCell>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Fee</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                                {
                                    services.map(({ _id, title, fee }, i) =>
                                        <TableRow key={_id}>
                                            <TableCell>{++i}</TableCell>
                                            <TableCell>{title}</TableCell>
                                            <TableCell>{fee}</TableCell>
                                            <TableCell align="right">
                                                <Button
                                                    onClick={() => deleteServiceHandler(_id)}
                                                >
                                                    <Delete color="secondary" />
                                                </Button>
                                                {processing && <Loader />}
                                            </TableCell>
                                        </TableRow>)
                                }

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>}
        </>
    );
};

export default ManageServices;