import React from 'react';
import Sidebar from './Sidebar';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ViewListIcon from '@material-ui/icons/ViewList';
import RateReviewIcon from '@material-ui/icons/RateReview';
const UserSidebar = () => {
    const sidebarItems = [
        {
            label: 'Order',
            route: '/order',
            Icon: AddShoppingCartIcon
        },
        {
            label: 'My Order',
            route: '/my-order',
            Icon: ViewListIcon
        },
        {
            label: 'Review',
            route: '/review',
            Icon: RateReviewIcon
        }
    ]
    return (
        <Sidebar sidebarItems={sidebarItems} />
    );
};

export default UserSidebar;