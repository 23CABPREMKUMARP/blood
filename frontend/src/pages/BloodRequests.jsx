import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { AlertCircle, MapPin, Phone } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const BloodRequests = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const res = await axios.get(`${API_URL}/requests`);
                setRequests(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchRequests();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex items-center mb-8">
                <AlertCircle className="text-red-600 h-8 w-8 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Emergency Blood Requests</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {requests.map((req, idx) => (
                    <motion.div
                        key={req._id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }}
                        className={`bg-white p-6 rounded-2xl shadow-sm border-l-4 ${req.urgencyLevel === 'Critical' ? 'border-red-600' : 'border-yellow-500'}`}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-bold text-xl text-gray-900">{req.patientName}</h3>
                                <p className="text-red-600 font-semibold">{req.hospitalName}</p>
                                <p className="text-gray-500 flex items-center text-sm mt-1">
                                    <MapPin className="h-4 w-4 mr-1 text-red-500" /> {req.district}, {req.state}
                                </p>
                            </div>
                            <div className="text-center">
                                <span className="bg-red-100 text-red-800 text-xl font-bold px-3 py-1 rounded-full block mb-1">
                                    {req.bloodGroupNeeded}
                                </span>
                                <span className="text-xs font-medium text-gray-500">{req.unitsRequired} Units</span>
                            </div>
                        </div>
                        {req.message && <p className="text-gray-600 text-sm mb-4">"{req.message}"</p>}
                        <button className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 mt-4 transition">
                            <Phone className="mr-2 h-4 w-4" /> Contact Hospital
                        </button>
                    </motion.div>
                ))}
                {requests.length === 0 && (
                    <p className="text-gray-500 col-span-2 text-center py-12 text-lg">No active emergency requests right now.</p>
                )}
            </div>
        </div>
    );
};

export default BloodRequests;
