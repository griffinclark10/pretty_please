import { useState, useEffect, useRef } from "react";
import { UilShare } from '@iconscout/react-unicons'

const WishlistCard = ({ color, initialTitle }) => {
    const [title, setTitle] = useState(initialTitle);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
  
    const closeDropdown = () => {
      setDropdownOpen(false);
    };
  
    const handleSelect = (newTitle) => {
      setTitle(newTitle);
      closeDropdown();
    };
  
    useEffect(() => {
      function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          closeDropdown();
        }
      }
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [dropdownRef]);
    
    return (
        <div className={`${color} group relative h-56 p-4 shadow rounded-lg m-2 hover:h-64 transition-all duration-300 ease-in-out`}>
            <div className="flex items-center space-x-2" ref={dropdownRef}>
            <h3 className="text-lg font-semibold">{title}</h3>
            <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm"
                onClick={toggleDropdown}
            >
                Options
            </button>
            {dropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleSelect('Option 1')}>Option 1</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleSelect('Option 2')}>Option 2</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleSelect('Option 3')}>Option 3</a>
                </div>
                </div>
            )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out hidden group-hover:flex flex-row justify-between items-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mb-1 w-8/12">Buy Now</button>
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg mb-1 w-1/4"><UilShare /></button>
            </div>
        </div>
    )
};
  
  

export default WishlistCard;