import React from 'react';
import { FiUser, FiShoppingBag } from 'react-icons/fi';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={`fixed inset-0 flex z-50 transition-opacity ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`} onClick={toggle}>
      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
      </div>
      <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white transform duration-300 ease-in-out lg:translate-x-0">
        <div className="absolute top-0 right-0 -mr-14 p-1">
          <button
            className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
            aria-label="Close sidebar"
            onClick={toggle}
          >
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {/* Sidebar content */}
        <div className="flex-1 h-0 overflow-y-auto">
          <div className="flex items-center justify-center mt-8 mb-4">
            <FiUser className="h-8 w-8 text-gray-600" />
            <span className="ml-2 text-gray-700">Mi Cuenta</span>
          </div>
          <nav className="px-2 py-4">
            <a href="/Perfil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Perfil</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Compras</a>
          </nav>
        </div>
      </div>
      {/* Close icon */}
      <div className="lg:hidden">
        {/* Dummy element to force sidebar to shrink to fit close icon */}
      </div>
    </div>
  );
};

export default Sidebar;
