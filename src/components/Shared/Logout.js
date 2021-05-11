import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import { GetContext } from '../../context';

const Logout = () => {
    const { logOut, loggedInUser } = GetContext();
    const logOutHandler = async e => {
        try {
            await logOut();
            console.log('log out successfully');
        } catch {

        }
    }
    return (
        <>
            {loggedInUser &&
                <div style={{ textAlign: 'center' }}>
                    <Button
                        style={{ marginBottom: 30, marginTop: 20 }}
                        onClick={logOutHandler}
                        variant="contained"
                        color="secondary">Logout</Button>
                </div>}
        </>
    );
};

export default Logout;