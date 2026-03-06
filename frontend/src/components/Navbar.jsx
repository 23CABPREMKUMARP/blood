import { Link } from 'react-router-dom';
import { Droplet } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="bg-red-600 shadow-md text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                            <Droplet className="h-8 w-8 text-white fill-current" />
                            <span className="font-bold text-xl tracking-tight">LifeDrop</span>
                        </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
                        <Link to="/" className="hover:text-red-200 transition-colors font-medium">Home</Link>
                        <Link to="/search" className="hover:text-red-200 transition-colors font-medium">Find Donors</Link>
                        <Link to="/requests" className="hover:text-red-200 transition-colors font-medium">Blood Requests</Link>
                        <Link to="/request-blood" className="hover:text-red-200 transition-colors font-medium text-red-100 font-bold">Request Blood</Link>
                        <Link to="/register-donor" className="bg-white text-red-600 px-4 py-2 rounded-md font-bold hover:bg-red-50 transition-colors">Become a Donor</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
