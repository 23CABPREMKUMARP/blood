import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const RequestBlood = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        patientName: '',
        bloodGroupNeeded: 'A+',
        hospitalName: '',
        district: '',
        state: '',
        unitsRequired: 1,
        contactNumber: '',
        urgencyLevel: 'High',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        if (!token) {
            alert('Please register as a donor or hospital first to post a request.');
            navigate('/register-donor');
            return;
        }

        try {
            await axios.post('http://localhost:5000/api/requests', formData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Blood Request Posted Successfully!');
            navigate('/requests');
        } catch (error) {
            console.error('Request Error:', error);
            alert(error.response?.data?.message || 'Error posting request.');
        }
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-red-50"
            >
                <div className="flex items-center gap-3 mb-8 text-red-600">
                    <AlertTriangle className="h-8 w-8" />
                    <h2 className="text-3xl font-bold">Post Emergency Request</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Patient Name</label>
                            <input type="text" name="patientName" required onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 outline-none" placeholder="Enter Full Name" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Blood Group Needed</label>
                            <select name="bloodGroupNeeded" onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 outline-none">
                                {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bg => <option key={bg} value={bg}>{bg}</option>)}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Units Required</label>
                            <input type="number" name="unitsRequired" min="1" required onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 outline-none" placeholder="e.g. 2" />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Hospital Name & Address</label>
                            <input type="text" name="hospitalName" required onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 outline-none" placeholder="Name of hospital" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">District</label>
                            <input type="text" name="district" required onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 outline-none" placeholder="City/District" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">State</label>
                            <input type="text" name="state" required onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 outline-none" placeholder="State" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Contact Number</label>
                            <input type="text" name="contactNumber" required onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 outline-none" placeholder="Attendant Phone" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Urgency Level</label>
                            <select name="urgencyLevel" onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 outline-none">
                                <option value="Normal">Normal</option>
                                <option value="High">High</option>
                                <option value="Critical">Critical (Immediate)</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Additional Message</label>
                            <textarea name="message" rows="3" onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 outline-none" placeholder="Any specific requirements..."></textarea>
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                        Submit Blood Request
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default RequestBlood;
