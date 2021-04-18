import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { GetContext } from '../../context';
import AddAdmin from '../Admin/AddAdmin';
import AddService from '../Admin/AddService';
import ManageServices from '../Admin/ManageServices';
import OrderedServices from '../Admin/OrderedServices';
import Home from '../Home/Home';
import LoginSignUp from '../LoginSignup/LoginSignUp';
import NotFound from '../Shared/NotFound';
import MyOrder from '../UserDashboard/MyOrder';
import Order from '../UserDashboard/Order';
import Review from '../UserDashboard/Review';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';



const App = () => {
  const { isAdmin } = GetContext();

  return (
    <Router>
      <Switch>
        <PublicRoute exact path='/' component={Home} />
        <PublicRoute exact path='/login' component={LoginSignUp} />
        <PublicRoute exact path='/signup' component={LoginSignUp} />
        <PrivateRoute exact path='/order'>
          {isAdmin ? <OrderedServices /> : <Order />}
        </PrivateRoute>
        <PrivateRoute exact path='/add-service'>
          {isAdmin ? <AddService /> : <NotFound />}
        </PrivateRoute>
        <PrivateRoute exact path='/add-admin'>
          {isAdmin ? <AddAdmin /> : <NotFound />}
        </PrivateRoute>
        <PrivateRoute exact path='/manage-services'>
          {isAdmin ? <ManageServices /> : <NotFound />}
        </PrivateRoute>
        {/* <PrivateRoute exact path='/place-order'>
          {isAdmin ? <NotFound /> : <Order />}
        </PrivateRoute> */}
        <PrivateRoute exact path='/my-order'>
          {isAdmin ? <NotFound /> : <MyOrder />}
        </PrivateRoute>
        <PrivateRoute exact path='/review'>
          {isAdmin ? <NotFound /> : <Review />}
        </PrivateRoute>
        <PublicRoute path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
