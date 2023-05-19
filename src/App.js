

import 'animate.css';
import './App.css';
import './styles/header.css';
import React, { useState, useEffect } from 'react';
import LoadingPage from '../src/components/LoadingPage';

import About from '../src/components/about';
import Contact from '../src/components/contact';
import Footer from '../src/components/footer';
import Header from './components/header';
import Portfolio from '../src/components/portfolio';
import Resume from '../src/components/resume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profilepic from "./images/Profilepic.jpg";
import Navbar from '../src/components/nav';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingPage />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Header />
          <img className='smile' src={Profilepic} alt="Handsome Man" />
          {/* <h1 className="animate__fadeIn">Welcome Friend!</h1> */}
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Portfolio' element={<Portfolio />} />
            <Route path='/Resume' element={<Resume />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

// here is my fake change