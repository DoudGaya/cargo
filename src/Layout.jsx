// imports 
import React from 'react';
import Navigation from './pages/home/Navigations';
import { Outlet } from 'react-router-dom';
import 'boxicons';
import Footer from './pages/home/Footer';


function Layout() {
  return (
    <>
    <div className="bg-gray-100 dark:bg-gray-900 flex flex-col w-full h-full">
    <Navigation />
        <Outlet />
    <Footer />
    </div>
    </>
  )
}

export default Layout
