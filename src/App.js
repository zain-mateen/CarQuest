import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';
import Animation from './pages/animation';
import LoaderComponent from './components/LoaderComponent/LoaderComponent';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import ProgressBar from './components/ProgressBar/ProgressBar';
import AboutPage from './pages/AboutPage';
import Service from './pages/Service';
import ServiceDetail from './pages/ServiceDetail';
import ContactPage from './pages/ContactPage';
import CarType from './pages/CarType';
import Cars from './pages/Cars';
import CarSingle from './pages/CarSingle';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import PricingPage from './pages/PricingPage';
import ImageGallery from './pages/ImageGallery';
import VideoGallery from './pages/VideoGallery';
import FaqPage from './pages/FaqPage';
import TestimonialPage from './pages/TestimonialPage'
import Drivers from './pages/Drivers';
import DriverDetail from './pages/DriverDetail';

import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, [location]);
  return (
    <>
      <ProgressBar/>
      {loading ? (
        <LoaderComponent/>
      ) : (
        <Animation>
          <ScrollToTop/>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/service' element={<Service />} />
            <Route path='/service/:id' element={<ServiceDetail />} />
            <Route path='/cars' element={<Cars />} />
            <Route path='/cars/:id' element={<CarSingle />} />
            <Route path='/car-type' element={<CarType />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:id' element={<BlogDetail />} />
            <Route path='/pricing' element={<PricingPage />} />
            <Route path='/image-gallery' element={<ImageGallery />} />
            <Route path='/video-gallery' element={<VideoGallery />} />
            <Route path='/testimonials' element={<TestimonialPage />} />
            <Route path='/faqs' element={<FaqPage />} />
            <Route path='/drivers' element={<Drivers />} />
            <Route path='/drivers/:id' element={<DriverDetail />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
          <Footer />
        </Animation>
      )}
    </>
  );
}

export default App;
