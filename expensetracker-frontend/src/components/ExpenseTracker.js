// src/components/ExpenseTracker.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ExpenseTracker.css';

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState([]);
    const [formData, setFormData] = useState({
        description: '',
        amount: '',
        category: '',
        date: ''
    });

    useEffect(() => {
        fetchExpenses();
    }, []);

    const fetchExpenses = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/expenses');
            setExpenses(response.data);
        } catch (error) {
            console.error('Error fetching expenses:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/expenses', formData);
            fetchExpenses();
            setFormData({ description: '', amount: '', category: '', date: '' });
        } catch (error) {
            console.error('Error adding expense:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/expenses/${id}`);
            fetchExpenses();
        } catch (error) {
            console.error('Error deleting expense:', error);
        }
    };

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Expense Management</h1>
                <div className="header-actions">
                    <button className="notification-btn">🔔</button>
                    <button className="settings-btn">⚙️</button>
                </div>
            </header>

            <div className="services-grid">
                <div className="service-card">
                    <div className="expense-form">
                        <h2>Add New Expense</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Description"
                                    value={formData.description}
                                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    placeholder="Amount"
                                    value={formData.amount}
                                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <select
                                    value={formData.category}
                                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                                    required
                                >
                                    <option value="">Select Category</option>
                                    <option value="Food">Food</option>
                                    <option value="Transport">Transport</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Bills">Bills</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input
                                    type="date"
                                    value={formData.date}
                                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                                    required
                                />
                            </div>
                            <button type="submit" className="submit-btn">Add Expense</button>
                        </form>
                    </div>
                </div>
            </div>

            <section className="insights-section">
                <h2>Recent Expenses</h2>
                <div className="expense-list">
                    <table>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Category</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map((expense) => (
                                <tr key={expense.id}>
                                    <td>{expense.description}</td>
                                    <td>${expense.amount}</td>
                                    <td>{expense.category}</td>
                                    <td>{expense.date}</td>
                                    <td>
                                        <button 
                                            className="delete-btn"
                                            onClick={() => handleDelete(expense.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default ExpenseTracker;