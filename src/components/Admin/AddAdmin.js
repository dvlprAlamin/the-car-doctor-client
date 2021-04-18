import { Button, Container, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import AdminSidebar from '../Shared/Sidebar/AdminSidebar';
import PageTitle from '../Shared/PageTitle';

const AddAdmin = () => {
    const [email, setEmail] = useState({})
    const blurHandler = e => {
        setEmail({ email: e.target.value })
    }
    const addAdminHandler = (e) => {
        e.preventDefault();
        axios.post('https://arcane-sands-09318.herokuapp.com/addAdmin', email)
            .then(res => {
                if (res.data) {
                    e.target.reset();
                    window.alert('Admin Added Successfully');
                }
            })
    }
    return (
        <>
            <AdminSidebar />
            <Container className='sidebarContainer'>
                <PageTitle text="Add Admin" />
                <form
                    onSubmit={addAdminHandler}
                    style={{ display: 'flex', maxWidth: 600 }}>
                    <TextField
                        fullWidth
                        name="email"
                        onBlur={blurHandler}
                        variant="outlined"
                        color="text-primary"
                        label="Email"
                        placeholder="Enter email of new admin"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary">Add</Button>
                </form>
            </Container>
        </>
    );
};

export default AddAdmin;