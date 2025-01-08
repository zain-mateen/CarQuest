import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';
import Animation from './pages/animation';
import LoaderComponent from './components/LoaderComponent/LoaderComponent';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';

import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location]);
  return (
    <>
      <ScrollToTop/>
      {loading ? (
        <LoaderComponent/>
      ) : (
        <Animation>
          <Header />
          <Home />
          <Footer />
        </Animation>
      )}
    </>
  );
}

export default App;
