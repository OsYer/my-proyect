import React, { useState } from 'react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';

function Sidebar2({ expanded, toggleSidebar }) {
  const [showEcommerceOptions, setShowEcommerceOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowEcommerceOptions(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowEcommerceOptions(false);
    }, 3000);
  };

  const handleOptionsMouseEnter = () => {
    clearTimeout();
  };

  return (
    <div className={`bg-gray-800 w-64 h-screen flex flex-col transition-all duration-300 ${expanded ? '' : 'w-16'}`}>
      <button className="p-4 text-white" onClick={toggleSidebar}>
        {expanded ? (
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
            />
          </svg>
        ) : (
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 11h16v2H4v-2z"
            />
          </svg>
        )}
      </button>
      {/* Resto del contenido del sidebar */}
      {expanded && (
        <div>
          <div className="p-4 text-white text-lg font-semibold">Dashboard</div>
          <a href="#" className="p-4 text-white flex items-center hover:bg-gray-700">
            <HiChartPie className="mr-2" /> Dashboard
          </a>
          <div
            className="p-4 text-white flex items-center justify-between hover:bg-gray-700"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              <HiShoppingBag className="mr-2" /> E-commerce
            </div>
            <HiArrowSmRight />
          </div>
          {showEcommerceOptions && (
            <div
              className="ml-4"
              onMouseEnter={handleOptionsMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="p-4 text-white flex items-center hover:bg-gray-700">
                <HiTable className="mr-2" /> Products
              </a>
              <a href="#" className="p-4 text-white flex items-center hover:bg-gray-700">
                <HiUser className="mr-2" /> Users
              </a>
            </div>
          )}
          <a href="#" className="p-4 text-white flex items-center hover:bg-gray-700">
            <HiInbox className="mr-2" /> Inbox
          </a>
        </div>
      )}
    </div>
  );
}

export default Sidebar2;
