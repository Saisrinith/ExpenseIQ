// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import ExpenseTracker from './components/ExpenseTracker';
import './styles/theme.css';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <Sidebar />
            <main className="main-content">
                <ExpenseTracker />
            </main>
        </div>
    );
}

export default App;