import React, { useEffect, useState } from 'react';
import '../styles/LoadingPage.css';

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setShowPortfolio(true);
      }, 2000);
    }
  }, [isLoading]);

  return (
    <div className={`loading-page ${isLoading ? 'fade-in' : 'fade-out'}`}>
      <div className="loading-text">Welcome Friend</div>
      {showPortfolio && (
        <div className={`portfolio-page ${showPortfolio ? 'fade-in' : ''}`}>
          {/* Your portfolio page content goes here */}
          <h1>Portfolio Page</h1>
        </div>
      )}
    </div>
  );
};


export default LoadingPage;
