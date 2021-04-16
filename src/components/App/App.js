import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ContextProvider } from '../../context';
import AddAdmin from '../Admin/AddAdmin';
import AddService from '../Admin/AddService';
import ManageServices from '../Admin/ManageServices';
import OrderedServices from '../Admin/OrderedServices';
import Home from '../Home/Home';
// import Footer from '../Shared/Footer/Footer';
// import Navigation from '../Shared/Navigation';
import AdminSidebar from '../Shared/Sidebar/AdminSidebar';
import UserSidebar from '../Shared/Sidebar/UserSidebar';
import MyOrder from '../UserDashboard/MyOrder';
import Order from '../UserDashboard/Order';
import Review from '../UserDashboard/Review';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';



const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <PublicRoute exact path='/' component={Home} />
          <PrivateRoute exact path='/ordered-services' component={OrderedServices} />
          <PrivateRoute exact path='/add-service' component={AddService} />
          <PrivateRoute exact path='/add-admin' component={AddAdmin} />
          <PrivateRoute exact path='/manage-services' component={ManageServices} />
          <PrivateRoute exact path='/order'>
            <Order />
          </PrivateRoute>
          <PrivateRoute exact path='/my-order' component={MyOrder} />
          <PrivateRoute exact path='/review' component={Review} />
        </Switch>
      </Router>
    </ContextProvider>
  );
};

export default App;
