import React from "react";

const MenuBar = ({ menuItems, activeItem, setActiveItem }) => {
  return (
    <nav className="bg-blue-800 w-full">
      <div className="flex items-center px-2 overflow-x-auto">
        {menuItems && menuItems.length > 0 ? (
          menuItems.map((item) => (
            <button
              key={item.id}
              id={item.id}
              onClick={() => setActiveItem(item.id)} // <- use Home's state
              className={`text-xs px-2 py-1 whitespace-nowrap
                ${activeItem === item.id
                  ? "text-white font-semibold"
                  : "text-white hover:text-yellow-600"
                }
              `}
            >
              {item.label}
            </button>
          ))
        ) : (
          <span className="text-white text-xs px-2 py-1">
            This menu is empty
          </span>
        )}
      </div>
    </nav>
  );
};

export default MenuBar;