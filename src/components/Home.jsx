// Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to My React App</h1>
        <p className="text-lg text-gray-600 mt-2">This is the home page of your application.</p>
      </header>

      <div className="flex space-x-4">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:ring focus:ring-blue-300">
          Get Started
        </button>
        <button className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg shadow hover:bg-gray-400 focus:ring focus:ring-gray-400">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;
