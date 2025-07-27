import React from 'react';

const Navbar = ({ username }) => {
  const iconStyles =
    "text-lg text-white cursor-pointer hover:text-pink-300 hover:scale-110 active:text-slate-700 font-semibold transition-all duration-300 ease-in-out hover:scale-200 hover:ease-in-out";

  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-800 shadow-lg px-6 py-4 flex items-center justify-between rounded-t-3xl">
      <h2 className="text-white font-bold text-xl font-rubik tracking-wide drop-shadow-md">
        Welcome to <span className="text-pink-300">Simplified</span> Employee List Management
      </h2>
      <div className="flex gap-6 items-center">
        <a href="https://wa.me/9831989926" target="_blank" rel="noopener noreferrer" className={iconStyles}>
          <img src="/wp.svg" alt="WhatsApp" className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/shounak-sarkar-41b53027a/" target="_blank" rel="noopener noreferrer" className={iconStyles}>
          <img src="/linked.svg" alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a href="https://x.com/_its_shaun__" target="_blank" rel="noopener noreferrer" className={iconStyles}>
          <img src="/twitter.svg" alt="Twitter / X" className="w-6 h-6" />
        </a>
        <a href="https://github.com/shounak-sarkar" target="_blank" rel="noopener noreferrer" className={iconStyles}>
          <img src="/github.svg" alt="GitHub" className="w-6 h-6" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
