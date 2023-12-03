import React from 'react';
import './Navbar.css';
import ImageComponent from './ImageComponent';
import logo from '../Images/logo.png';
import Search from './Search';
//import {Link} from 'react-scroll'
import Button from './Button';
import { AppProvider } from "./context";
import icons8 from "./Images/icons8-cart-50.png"

export default function Navbar() {

  const handleButtonClick1=()=>{
    
  }
  return (
    <nav className ="navbar">
      <div class ="container">
        <div className="logo-container">
          <ImageComponent imageUrl={logo} altText="lk" className ="navbar-logo" height = {50} width = {50} />
          <span className="logo-text">eshop</span>
        </div>
        <></>
        <Search/>
        <ul >
           <li className='button-cart'> <ImageComponent imageUrl={icons8} alt ="fjjf" hieght={30} width={30}/><button onClick={handleButtonClick1}  >Cart
           </button></li>
       
        <li className='button-cart'> <ImageComponent imageUrl={icons8} alt ="fjjf" hieght={30} width={30}/><button onClick={handleButtonClick1}  > Register
           </button></li>
           <li className='button-cart'> <ImageComponent imageUrl={icons8} alt ="fjjf" hieght={30} width={30}/><button onClick={handleButtonClick1}  > Sign In
           </button></li>
           </ul>

        </div>

    </nav>
  );
}