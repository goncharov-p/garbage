import React, { useState  } from 'react';
import logo from './logo.svg';
import Test from './Test';
import Company from './Company';
import './App.scss';

function App() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
 const handleSubmit = (e) => {
  //  alert('LogIn')
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log(formData.get('email'));
  console.log(formData.get('password'));
  //  console.log(email);
  //  console.log(password);
 };
  
  return (
   <form onSubmit={handleSubmit}>
     <label>Email:</label>
     {/* <input type='email' id='email' name='email' value={email} onChange={(e) => {setEmail(e.target.value)}}/> */}
     <input type='email' id='email' name='email'/>
     <label>Password:</label>
     {/* <input type='text' id='password' name='password' value={password} onChange={(e) => {setPassword(e.target.value)}}/> */}
     <input type='text' id='password' name='password' />
     <button >LogIn</button>
   </form>
  );
}

export default App;
