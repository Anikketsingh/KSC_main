import './App.css';
import Footer from './footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header/Header'; // Import your Header component
import HeroSection from './hero-section/HeroSection';
import Join from './join/Join';
import Plans from './plans/Plans';
import Programs from './programs/Programs';
import Reasons from './reasons/Reasons';
import Events from './Events/Events';
import Testimonials from './testimonials/Testimonials';
import Gallery from './Gallery/Gallery';
import Info from './owner_info/Info';
const HomePage = () => (
  <>
   <HeroSection />
    <Programs />
    <Reasons />
    <Events />
    <Plans />
    <Join />
    <Testimonials />
    <Footer />
  </>
);

function App() {
  return (
    <div className="App">
      <Router>
       
       
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<Info />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;