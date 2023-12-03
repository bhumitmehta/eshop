import React,{useContext} from 'react';
import './App.css';
import SignUpForm from './components/SignUpForm';
import Navbar from './components/Navbar';
import { AppProvider } from "./components/context";
import Productcontainer from './components/Productcontainer';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import ProductPage from './components/Productpage';
import { AuthContext } from './components/Context/AuthContext';
function App() {
  const {currentUser} = useContext(AuthContext);
  
  const RequireAuth = ({children })=>{
    return currentUser ? (children):<Navigate to="/"/>
  }
  return (
    <Router>
      <AppProvider>
        <Navbar />
        <div className="below-nav-bar">
          <Routes>
            <Route path='signup' element={<SignUpForm/>}/>
            <Route path="/" element={<Productcontainer />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;
