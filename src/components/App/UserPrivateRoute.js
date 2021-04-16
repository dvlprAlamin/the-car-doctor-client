import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { GetContext } from '../context';
import UserSidebar from '../Shared/Sidebar/UserSidebar';

const UserRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            component={(props) => (
                <>
                    <UserSidebar />
                    <Component {...props} />
                </>
            )}
        />
    );
};

const UserPrivateRoute = ({ children, ...rest }) => {
    // const { loggedInUser } = GetContext();
    const loggedInUser = true
    return (
        <UserRoute
            {...rest}
            render={({ location }) =>
                loggedInUser ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default UserPrivateRoute;