import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ menuItems, activeMenu, setActiveMenu }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <nav className="bg-gray-100 w-full shadow flex justify-between items-center px-4">
          <div className="flex items-center space-x-4">
        <span className="text-sm font-semibold">IMP-PRIME-TSD</span>
        <button
          id="logout-button"
          onClick={handleLogout}
          className="text-xs px-3 py-1 rounded hover:text-yellow-600 transition underline"
        >
          Logout
        </button>
      </div>


      <div className="flex space-x-1 overflow-x-auto">
        {menuItems.map((item) => (
          <button
            key={item.id}
            id={item.id}
            onClick={() => setActiveMenu(item.id)}
            className={`text-xs px-4 py-1 rounded-t-2xl border border-gray-400
              ${activeMenu === item.id
                ? "bg-blue-800 text-white font-semibold"
                : "bg-[#5a849c] text-gray-800 hover:text-white"
              }`}
          >
            {item.label}
          </button>
        ))}
      </div>

    

    </nav>
  );
}