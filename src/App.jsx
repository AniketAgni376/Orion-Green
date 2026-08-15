import { BrowserRouter as Router, Routes, Route, Link , useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./index.css";

import logo from "./assets/orion-green-logo.png";

import WhyOrion from "./components/WhyOrion";
import Solutions from "./components/Solutions";

import ResidentialSolar from "./pages/ResidentialSolar";
import CommercialSolar from "./pages/CommercialSolar";
import IndustrialSolar from "./pages/IndustrialSolar";
import SmoothScroll from "./components/SmoothScroll";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}


function Home() {
  return (
    <main className="app">
      <nav className="navbar">
        <Link to="/" className="brand">
          <img src={logo} alt="Orion Green" />
        </Link>

        <div className="nav-links">
          <a href="#solutions">Solutions</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="quote-btn">
          Get a Quote
          <span>↗</span>
        </a>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">RENEWABLE ENERGY SOLUTIONS</p>

          <h1>
            Clean Energy.
            <br />
            <span>Green Future.</span>
          </h1>

          <p className="hero-description">
            Smarter solar solutions for homes, businesses and industries.
            Powering a cleaner tomorrow with reliable renewable energy.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Get a Free Quote
              <span>↗</span>
            </a>

            <a href="#solutions" className="secondary-btn">
              Explore Solutions
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbital orbital-one"></div>
          <div className="orbital orbital-two"></div>

          <div className="energy-core">
            <div className="sun"></div>
          </div>

          <div className="energy-label">
            <span>ORION GREEN</span>
            <small>POWERING TOMORROW</small>
          </div>
        </div>
      </section>

      <WhyOrion />
      <Solutions />
      <SmoothScroll />
      <ScrollToTop />
    </main>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Solar Solutions */}
        <Route
          path="/solutions/residential"
          element={<ResidentialSolar />}
        />

        <Route
          path="/solutions/commercial"
          element={<CommercialSolar />}
        />

        <Route
          path="/solutions/industrial"
          element={<IndustrialSolar />}
        />

      </Routes>
    </Router>
  );
}

export default App;