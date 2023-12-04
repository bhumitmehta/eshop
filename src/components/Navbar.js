import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import ImageComponent from './ImageComponent';
import logo from '../Images/logo.png';
import Search from './Search';
import { Routes, Route } from 'react-router-dom';
import icons8 from './Images/icons8-cart-50.png';
import SignUpForm from './SignUpForm';

export default function Navbar() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/'); // Redirects to the register route
  };

  const handleSignInClick = () => {
    navigate('/signin'); // Redirects to the signin route
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo-container">
            <ImageComponent imageUrl={logo} altText="lk" className="navbar-logo" height={50} width={50} />
            <span className="logo-text">eshop</span>
          </div>
          <Search />
          <ul>
            <li className="button-cart">
              <ImageComponent imageUrl={icons8} alt="fjjf" hieght={30} width={30} />
              <button onClick={handleRegisterClick}>Register</button>
            </li>
            <li className="button-cart">
              <ImageComponent imageUrl={icons8} alt="fjjf" hieght={30} width={30} />
              <button onClick={handleSignInClick}>Sign In</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
