import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Search, MapPin, Phone } from 'lucide-react';

const SearchDonor = () => {
    const [donors, setDonors] = useState([]);
    const [filters, setFilters] = useState({
        bloodGroup: '',
        district: '',
        state: ''
    });

    const fetchDonors = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/donors', { params: filters });
            setDonors(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchDonors();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchDonors();
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-10"
            >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Search className="mr-2 text-red-600" />
                    Search Blood Donors
                </h2>

                <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <select
                        className="p-3 border rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500"
                        value={filters.bloodGroup} onChange={e => setFilters({ ...filters, bloodGroup: e.target.value })}
                    >
                        <option value="">Any Blood Group</option>
                        {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bg => (
                            <option key={bg} value={bg}>{bg}</option>
                        ))}
                    </select>
                    <input
                        type="text" placeholder="District" className="p-3 border rounded-lg bg-gray-50"
                        value={filters.district} onChange={e => setFilters({ ...filters, district: e.target.value })}
                    />
                    <input
                        type="text" placeholder="State" className="p-3 border rounded-lg bg-gray-50"
                        value={filters.state} onChange={e => setFilters({ ...filters, state: e.target.value })}
                    />
                    <button type="submit" className="bg-red-600 text-white font-bold p-3 rounded-lg hover:bg-red-700 transition">
                        Search
                    </button>
                </form>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {donors.length > 0 ? donors.map((donor, idx) => (
                    <motion.div
                        key={donor.id || idx} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-bold text-xl text-gray-900">{donor.name}</h3>
                                <p className="text-gray-500 flex items-center text-sm mt-1">
                                    <MapPin className="h-4 w-4 mr-1 text-red-500" /> {donor.district}, {donor.state}
                                </p>
                            </div>
                            <span className="bg-red-100 text-red-800 text-xl font-bold px-3 py-1 rounded-full">
                                {donor.bloodGroup}
                            </span>
                        </div>

                        <button className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-4">
                            <Phone className="mr-2 h-4 w-4" /> Contact Donor
                        </button>
                    </motion.div>
                )) : (
                    <p className="col-span-3 text-center text-gray-500 py-12 text-lg">No donors found matching your criteria.</p>
                )}
            </div>
        </div>
    );
};

export default SearchDonor;
