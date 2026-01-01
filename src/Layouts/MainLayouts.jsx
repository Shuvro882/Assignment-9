import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayouts = () => {
    return (
        <div className="min-h-screen flex flex-col">
      
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

    </div>
    );
};

export default MainLayouts;