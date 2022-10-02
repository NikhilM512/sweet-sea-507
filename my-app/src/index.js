import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { RegisterContextProvider } from './Contexts/RegistrationContext/RegisterContextProvider';

import { SignInContextProvider } from './Contexts/SignInContext/SignInContextProvider';
import { CourseContextProvider } from './Contexts/CourseContext/CourseContextProvider';
import { CartContextProvider } from './Contexts/CartContext/CartContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartContextProvider>
  <CourseContextProvider>
  <RegisterContextProvider>
  <SignInContextProvider>

import {SignInContextProvider} from "./Contexts/SignInContext/SignInContextProvider"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RegisterContextProvider>
    <SignInContextProvider>

  <BrowserRouter>
    <App />
  </BrowserRouter>
  </SignInContextProvider>
  </RegisterContextProvider>

  </CourseContextProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
