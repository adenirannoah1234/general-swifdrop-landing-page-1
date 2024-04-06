import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/navbar/Navbar';
import CustomCarousel from './components/heros/carousel/carousel';
import Home from './components/home/Home';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Home />
      </Router>
    </>
  );
}

export default App;
