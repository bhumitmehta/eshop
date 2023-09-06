
// App.js

import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Pagination from './components/Pagination';
import { AppProvider } from "./components/context";
import Productcontainer from './components/Productcontainer';

function App() {
  return (
    <AppProvider>
      <Navbar />
      <div className ="below-nav-bar">
      <Productcontainer />
      <Pagination />
      </div>
    </AppProvider>
  );
}

export default App;

