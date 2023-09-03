import React from 'react';
import './NavBar.css';
import ImageComponent from './ImageComponent';
import logo192 from '../Images/logo192.png';
import {Link} from 'react-scroll'
import Button from './Button';

export default function NavBar() {
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
          <ImageComponent imageUrl={logo192} altText="lk" className ="navbar-logo" height = {50} width = {50} />
          <span className="logo-text">Mycrypto</span>
        </div>
        <ul >
          <li  ><Link to="banner" smooth={true} duration={500}>Home</Link></li>
          <li >    <Link to="about" smooth={true} duration={500}>About</Link></li>
           <li> <Link to="news" smooth={true} duration={500}>Pricing</Link></li>
          <li ><Link>Tokens</Link></li>
         <li > <Link to="news" smooth={true} duration={500}> News</Link></li>
           <li > <Link>Pages</Link></li>
           <li> <Button onClick={handleButtonClick} text={"Download"} /></li>
           <li> <Button onClick={handleButtonClick1} text={"Chart"} /></li>
        </ul>

      </div>
    </nav>
  );
}

