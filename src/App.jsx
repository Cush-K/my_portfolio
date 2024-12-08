import React, { useState, useEffect } from 'react';

// 1. Header Components
import Hero from './components/Hero';

// 2. Content Components
import Skillz from './components/Skillz';
import Achievement from './components/Achievement';
import Projects from './components/Projects';


// 3. Footer Component
import AboutMe from './components/AboutMe';

// 4. Utility Components
import Spinner from './components/Spinner';
import { name } from './your_info';
import ScrollToTopButton from './components/ScrollToTopButton';


function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    document.title = `${name.firstname} ${name.lastname}`;
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Hero />
          <Skillz />
          <ScrollToTopButton />
          <Achievement />
          <Projects />
          <AboutMe />
          
        </>
      )}
    </>
  );
}

export default App;


