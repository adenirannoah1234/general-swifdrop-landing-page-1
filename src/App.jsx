import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/navbar/Navbar';
import CustomCarousel from './components/heros/carousel/carousel';
import Home from './components/home/Home';
import Service from './pages/service/Service';
import Footer from './components/footer/Footer';
import AboutUS from './pages/aboutus/AboutUS';
import Features from './pages/features/Features';
import Privacy from './pages/privacy/Privacy';
import Terms from './pages/terms/Terms';
import Career from './pages/career/Career';
import Faq from './pages/faq/Faq';
import 'react-image-crop/dist/ReactCrop.css';
// import ParentComponent from './components/';
// import CustomNavbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/About" element={<AboutUS />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Faq" element={<Faq />} />
          {/* <Route path="/ParentComponent" element={<ParentComponent />} /> */}
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
