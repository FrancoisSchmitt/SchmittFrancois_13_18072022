import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './App.css';
import './index.css';

import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Error from './Pages/Error';

import { Provider } from 'react-redux';
import { store } from './Store';
import Profil from './Pages/Profil';

/**
 * @const root added the store to the provider
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
            <Provider store={store}>
                  <BrowserRouter>
                        <Header />
                        <Routes>
                              <Route path="/" element={<Home />} />
                              <Route path="/login" element={<Login />} />
                              <Route path="/profile" element={<Profil />} />
                              <Route path="/404" element={<Error />} />
                              <Route path="*" element={<Error />} />
                        </Routes>
                        <Footer />
                  </BrowserRouter>
            </Provider>
      </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
