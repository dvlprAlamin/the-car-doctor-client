import React from 'react';
import { Route } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation';

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} component={(props) => (
            <div>
                <Navigation />
                <Component {...props} />
                <Footer />
            </div>
        )}
        />
    )
}

export default PublicRoute;