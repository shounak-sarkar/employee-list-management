import React from 'react';

const Header = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="w-full py-6 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-md rounded-b-3xl">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white font-rubik drop-shadow-md tracking-wide">
          📅 {formattedDate}
        </h1>
        <p className="text-lg md:text-xl text-white/80 font-rubik mt-2 italic tracking-widest">
          A great day to manage your team!
        </p>
      </div>
    </div>
  );
};

export default Header;
