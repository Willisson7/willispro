import 'animate.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import fogVideo from '../src/images/videos/FOGGY.mp4';

import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Footer from '../src/components/footer';
// import Header from './components/header';
import Portfolio from '../src/components/portfolio';
import Resume from '../src/components/resume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Profilepic from "./images/Profilepic.jpg";
import Navbar from '../src/components/nav';
import LoadingPage from './components/LoadingPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);
  
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="App">
      <div style={{position: "fixed", width: "100%", height: "100%", zIndex: -1}}>
        <video autoPlay="autoplay" loop="loop" muted style={{width: "100%", height: "100%", objectFit: "cover"}}>
          <source src={fogVideo} type="video/mp4" />
        </video>
      </div>
      <BrowserRouter>
        <Navbar />
        {/* <Header /> */}
        {/* <img className='smile' src={Profilepic} alt="Handsome Man" /> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/Resume' element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
