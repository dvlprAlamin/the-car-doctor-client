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
                <div style={{ display: 'flex' }}>
                    <Avatar src={loggedInUser.photoURL} />
                    <Button
                        style={{ marginLeft: 10 }}
                        onClick={logOutHandler}
                        variant="contained"
                        color="secondary">Logout</Button>
                </div>}
        </>
    );
};

export default Logout;