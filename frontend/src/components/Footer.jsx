import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex justify-center items-center gap-2 mb-4">
                    <Heart className="h-6 w-6 text-red-500 fill-current" />
                    <span className="font-bold text-xl tracking-tight">LifeDrop</span>
                </div>
                <p className="text-gray-400">&copy; {new Date().getFullYear()} LifeDrop. All rights reserved.</p>
                <p className="text-gray-500 text-sm mt-2">Made with React, Node.js & MongoDB.</p>
            </div>
        </footer>
    );
};

export default Footer;
