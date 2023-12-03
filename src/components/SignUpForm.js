// SignUpForm.js
import React, { useState , useContext} from "react";
import {auth,googleAuthProvider } from "./firebase";
import { useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword,signInWithPopup,signInWithEmailAndPassword} from "firebase/auth";
import './SignUpForm.css'
 import { AuthContext } from "./Context/AuthContext";
const SignUpForm = () => {

  const [formData, setFormData] = useState({
   
    email: "",
    password: "",
  });
  const navigate =useNavigate();


 const {dispatch} = useContext(AuthContext)



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  try{
   await createUserWithEmailAndPassword (auth,formData.email,formData.password);
    // Clear the form fields
    
  }
  catch(error){
    console.log(error);
  }};
 
  const signinWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      console.log("Successfully signed in with Google"); // Add this line
      navigate("/todolist");
    } catch (error) {
      console.log("Error signing in with Google:", error); // Add this line
    }
  };

   
  const signIn = () => {
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/todolist");
      })
      .catch((error) => console.log(error));
  };


  return (
    <div className="signup-form">
    

 
      <form onSubmit={handleSubmit} className="signupform">
      <h2>Sign up</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Passaord">Password</label>
          <input
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="form-button">
          <button onClick={signIn}>Sign In </button >
        <button onClick={signinWithGoogle}>Sign in with google</button>
        <button type="submit">Submit</button>
       
        </div>
     {/* <span className="error-message">wrong email or password </span> */}
      </form>

    </div>
  );
};

export default SignUpForm;

