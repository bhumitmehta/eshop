import React from 'react';
import './Navbar.css';
import ImageComponent from './ImageComponent';
import logo from '../Images/logo.png';
import Search from './Search';
//import {Link} from 'react-scroll'
import Button from './Button';
import { AppProvider } from "./context";

export default function Navbar() {
  const handleButtonClick = () => {
    const link = document.createElement('a');
    link.href = "";
    link.download = 'downloaded-file.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
           <li> <Button onClick={handleButtonClick1} text={"Cart"} /></li>
        </ul>

      </div>
    </nav>
  );
}