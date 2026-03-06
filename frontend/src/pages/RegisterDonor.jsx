import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const RegisterDonor = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '', email: '', password: '', phone: '',
        bloodGroup: 'A+', location: '', district: '', state: '',
        role: 'Donor'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_URL}/auth/register`, formData);
            localStorage.setItem('token', res.data.token);
            alert('Welcome Hero! Registration successful.');
            navigate('/search');
        } catch (error) {
            console.error('Registration Error Details:', {
                status: error.response?.status,
                data: error.response?.data,
                message: error.message
            });
            const errorMsg = error.response?.data?.message || 'Error connecting to server. Please ensure the backend is running.';
            alert(errorMsg);
        }
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-12">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white p-8 rounded-2xl shadow-lg border border-red-100">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center text-red-600">Become a Hero Today</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" name="name" required onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 bg-gray-50 focus:border-red-500 focus:ring-red-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" name="email" required onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 bg-gray-50 focus:border-red-500 focus:ring-red-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" name="password" required onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 bg-gray-50 focus:border-red-500 focus:ring-red-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone</label>
                            <input type="text" name="phone" required onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 bg-gray-50 focus:border-red-500 focus:ring-red-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Blood Group</label>
                            <select name="bloodGroup" required onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 bg-gray-50 focus:border-red-500 focus:ring-red-500">
                                {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bg => <option key={bg} value={bg}>{bg}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">District</label>
                            <input type="text" name="district" required onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 bg-gray-50 focus:border-red-500 focus:ring-red-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">State</label>
                            <input type="text" name="state" required onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 bg-gray-50 focus:border-red-500 focus:ring-red-500" />
                        </div>
                    </div>
                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors">
                        Register as Donor
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default RegisterDonor;
