import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen, toggleSidebar, handleTabClick, activeTab }) => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`relative bg-gray-800 text-white p-4 transition-transform duration-300 ${
                    isSidebarOpen ? 'w-64 translate-x-0' : 'w-16 -translate-x-64'
                }`}
            >
                {/* Sidebar Content */}
                {isSidebarOpen && (
                    <>
                        <button
                            onClick={toggleSidebar}
                            className="absolute top-4 right-[-1.5rem] bg-gray-700 text-white p-2 rounded-full focus:outline-none transition-transform hover:bg-gray-600"
                        >
                            &gt;
                        </button>
                        <h1 className="text-xl font-bold mb-6">Dashboard</h1>
                        <nav className="space-y-4">
                            <Link
                                to="#"
                                onClick={() => handleTabClick('home')}
                                className={`block text-gray-300 hover:text-white ${activeTab === 'home' ? 'text-yellow-500' : ''}`}
                            >
                                Home
                            </Link>
                            <Link
                                to="#"
                                onClick={() => handleTabClick('about')}
                                className={`block text-gray-300 hover:text-white ${activeTab === 'about' ? 'text-yellow-500' : ''}`}
                            >
                                All Notify Users
                            </Link>
                            <Link
                                to="#"
                                onClick={() => handleTabClick('flight-status')}
                                className={`block text-gray-300 hover:text-white ${activeTab === 'flight-status' ? 'text-yellow-500' : ''}`}
                            >
                                Flight Status
                            </Link>
                            <Link
                                to="#"
                                onClick={() => handleTabClick('services')}
                                className={`block text-gray-300 hover:text-white ${activeTab === 'services' ? 'text-yellow-500' : ''}`}
                            >
                                All Flights
                            </Link>
                            <Link
                                to="#"
                                onClick={() => handleTabClick('contact')}
                                className={`block text-gray-300 hover:text-white ${activeTab === 'contact' ? 'text-yellow-500' : ''}`}
                            >
                                Add Flights
                            </Link>
                        </nav>
                    </>
                )}
            </div>

            {/* Show Sidebar Button */}
            {!isSidebarOpen && (
                <button
                    onClick={toggleSidebar}
                    className="fixed top-4 left-4 bg-gray-700 text-white p-2 rounded-full focus:outline-none transition-transform hover:bg-gray-600"
                >
                    &lt;
                </button>
            )}
        </div>
    );
};

export default Sidebar;
