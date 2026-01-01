import React from 'react';

const Newsletter = () => {
    return (
        <section className="bg-black text-white py-12 px-6 text-center">
      <h2 className="text-2xl font-bold mb-4">
        Subscribe to our Newsletter
      </h2>
      <p className="text-gray-400 mb-6">
        Get updates on new indie games and developers
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded text-black w-full sm:w-64"
        />
        <button className="bg-green-500 px-6 py-2 rounded hover:bg-green-600">
          Subscribe
        </button>
      </div>
    </section>
    );
};

export default Newsletter;