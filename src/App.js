import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { AppProvider } from "./components/context";
import Productcontainer from './components/Productcontainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './components/Productpage';

function App() {
  return (
    <Router>
      <AppProvider>
        <Navbar />
        <div className="below-nav-bar">
          <Routes>
            <Route path="/" element={<Productcontainer />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;
