// imports 
import React from 'react';
import Home from './pages/home/Home';
import About from './pages/about/About'
import Navigation from './pages/home/Navigations';
// import ComingSoon from './pages/home/ComingSoon';
import 'boxicons';
import Footer from './pages/home/Footer';



function App() {
  return (
    <>
    <div className="bg-gray-100 dark:bg-gray-900 flex flex-col w-full h-full">
    <Navigation />
      {/* <Home /> */}
      <About />
      {/* <ComingSoon/> */}
      <Footer />
    </div>
    </>
  )
}

export default App
