import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import CreateIcon from '@material-ui/icons/Create';
import ViewListIcon from '@material-ui/icons/ViewList';
import Sidebar from './Sidebar';
const AdminSidebar = () => {
    const sidebarItems = [
        {
            label: 'Ordered Services',
            route: '/order',
            Icon: ViewListIcon
        },
        {
            label: 'Add Service',
            route: '/add-service',
            Icon: AddIcon
        },
        {
            label: 'Add Admin',
            route: '/add-admin',
            Icon: PersonAddRoundedIcon
        },
        {
            label: 'Manage Services',
            route: '/manage-services',
            Icon: CreateIcon
        },
    ]
    return (
        <Sidebar sidebarItems={sidebarItems} />
    );
};

export default AdminSidebar;