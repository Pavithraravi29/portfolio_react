import React from "react";

const MenuBar = ({ toggleMenu, isMenuOpen }) => {
    return (
        <div className="col-span-full bg-gray-800 p-4 flex justify-end items-center">
            <button onClick={toggleMenu}>
                {isMenuOpen ? (
                    <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                ) : (
                    <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                )}
            </button>
        </div>
    );
}

export default MenuBar;
