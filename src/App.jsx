import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BasketProvider } from './context/BasketContext';
import { UserProvider } from './context/UserContext';
import Navigation from './components/common/Navigation/Navigation';
import Footer from './components/common/Footer/Footer';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Basket from './components/pages/Basket/Basket';
import FAQ from './components/pages/FAQ/FAQ';
import Profile from './components/pages/Profile/Profile';
import Registration from './components/pages/Registration/Registration';
import Policy from './components/pages/Policy/Policy';
import './App.css';

function App() {
  return (
    <UserProvider>
      <BasketProvider>
        <Router>
          <div className="App">
            <Navigation />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/policy" element={<Policy />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </BasketProvider>
    </UserProvider>
  );
}

export default App;
