// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';
import profileImage from '../images/profile.png';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="profile">
                <div className="avatar">
                    <img src={profileImage} alt="Profile" />    
                </div>
                <h3>Personal Expense Tracker</h3>
            </div>

            <nav className="nav-menu">
                <div className="nav-section">
                    <h4>Management</h4>
                    <ul>
                        <li className="active">Dashboard</li>
                        <li>Expenses</li>
                        <li>Analytics</li>
                    </ul>
                </div>

                <div className="nav-section">
                    <h4>Reports</h4>
                    <ul>
                        <li>Monthly Summary</li>
                        <li>Categories</li>
                        <li>Budget Planning</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Sidebar;