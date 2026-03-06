import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Droplet, Users, Activity } from 'lucide-react';

const HomePage = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-white dark:bg-gray-800 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6"
                    >
                        Donate <span className="text-red-600">Blood</span>, Save Lives
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-xl text-gray-500 dark:text-gray-300 max-w-2xl mx-auto mb-10"
                    >
                        Your single drop of blood could be a drop of life for someone else. Join our growing community of lifesavers today.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link to="/search" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl transition-all">
                            <Search className="mr-2 h-5 w-5" /> Find Blood
                        </Link>
                        <Link to="/register-donor" className="inline-flex items-center justify-center px-8 py-4 border border-red-600 text-lg font-medium rounded-lg text-red-600 dark:text-red-400 bg-transparent hover:bg-red-50 dark:hover:bg-red-900/20 transition-all">
                            Become a Donor
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-red-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <motion.div whileHover={{ scale: 1.05 }} className="bg-red-700 p-8 rounded-2xl shadow-lg border border-red-500">
                            <Users className="h-12 w-12 mx-auto mb-4 opacity-80" />
                            <h3 className="text-4xl font-bold mb-2">5,200+</h3>
                            <p className="text-red-200">Registered Donors</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className="bg-red-700 p-8 rounded-2xl shadow-lg border border-red-500">
                            <Droplet className="h-12 w-12 mx-auto mb-4 opacity-80" />
                            <h3 className="text-4xl font-bold mb-2">1,500+</h3>
                            <p className="text-red-200">Available Donors</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className="bg-red-700 p-8 rounded-2xl shadow-lg border border-red-500">
                            <Activity className="h-12 w-12 mx-auto mb-4 opacity-80" />
                            <h3 className="text-4xl font-bold mb-2">3,400+</h3>
                            <p className="text-red-200">Lives Saved</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Emergency Request Highlight */}
            <section className="py-24 bg-white dark:bg-gray-800">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Need Blood Urgently?</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Post an emergency request and notify all nearby available donors instantly.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/request-blood" className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-shadow">
                            Post Blood Request
                        </Link>
                        <Link to="/requests" className="bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-shadow">
                            View Active Requests
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
