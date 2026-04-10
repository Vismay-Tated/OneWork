import Navbar from '../Home/Navbar';
import Hero from '../Home/Hero';
import Features from '../Home/Features';
import Footer from '../Home/Footer';
import './home.css';

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}