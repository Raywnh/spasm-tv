// Importing the necessary components and packages
import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink, Link, Navigate } from 'react-router-dom'; // Importing necessary routing packages
import { UserAuth } from '../context/AuthContext'; // Importing the UserAuth context

import spasm from '../assets/spasm.png'; // Importing the logo

// Defining the Sidebar component
const Sidebar = () => {
    const { user, logOut } = UserAuth(); // Extracting the user and logOut values from the UserAuth context

    const handleSignOut = async () => { // Defining the function to handle sign-out
        try {
            await logOut(); // Logging out the user
            Navigate('/signin'); // Navigating to the sign-in page
        } catch (error) {
            console.log(error) // Logging any errors that occur
        }
    }

    return (
        <div
            style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }} // Setting the style of the div that contains the Sidebar component
        >
            <CDBSidebar textColor="#fff" backgroundColor="#1e1e1e"> // Creating the Sidebar component with the necessary props
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}> // Adding a header to the Sidebar
                    <img src={spasm} alt="spasm" style={{ width: '50px', marginRight: "2px" }} /> // Adding the logo to the header
                    <a
                        href="/"
                        className="text-decoration-none"
                        style={{ color: 'inherit' }} // Styling the header
                    >
                          SPASM.TV
                    </a>
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content"> // Adding content to the Sidebar
                    <CDBSidebarMenu>
                        <NavLink exact to="/webcam" activeClassName="activeClicked"> // Adding a link to the webcam page
                            <CDBSidebarMenuItem icon="columns">Webcam</CDBSidebarMenuItem> // Adding a menu item for the webcam page
                        </NavLink>
                        <NavLink exact to="/" activeClassName="activeClicked"> // Adding a link to the car FPV page
                            <CDBSidebarMenuItem icon="table">Car FPV</CDBSidebarMenuItem> // Adding a menu item for the car FPV page
                        </NavLink>
                        <NavLink exact to="/profile" activeClassName="activeClicked"> // Adding a link to the profile page
                            <CDBSidebarMenuItem icon="user">Profile Page</CDBSidebarMenuItem> // Adding a menu item for the profile page
                        </NavLink>
                        <NavLink exact to="/" activeClassName="activeClicked"> // Adding a link to the analytics page
                            <CDBSidebarMenuItem icon="chart-line">
                                Analytics
                            </CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                <CDBSidebarFooter style={{ textAlign: 'center' }}> // Adding a footer to the Sidebar
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar; // Exporting the Sidebar component
