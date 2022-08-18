import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getToken } from '../../Store';
import { postLogin } from '../../Service';
import { useState, useEffect } from 'react';
import './index.css';
import { createPath, useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

/**
 *
 * @function Login
 * @returns  template a component block belonging to the home page
 */

export default function Login() {
      const dispatch = useDispatch();
      const Navigate = useNavigate();

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [status, setStatus] = useState('');
      const [loginErreur, setLoginErreur] = useState('');

      const tokenSelector = useSelector((state) => state.token.value);

      const handleSubmit = (event) => {
            event.preventDefault();
            const log = postLogin({ email: email, password: password });
            log.then((results) => {
                  if (results.status !== 400) {
                        setStatus(results.status);
                        newToken(results.token);
                        console.log(results.message);
                  } else {
                        console.log(results.message);
                        setLoginErreur(results.message);
                  }
            });
      };

      const newToken = (newToken) => {
            dispatch(getToken(newToken));
      };

      useEffect(() => {
            if (tokenSelector !== '' || status === 200) {
                  Navigate('/profile');
            }
      }, [tokenSelector, status]);
      return (
            <main className="bg-dark">
                  <section className="sign-in-content">
                        <i className="fa fa-user-circle sign-in-icon"></i>
                        <h1>Sign In</h1>
                        <form onSubmit={handleSubmit}>
                              <div className="input-wrapper">
                                    <label htmlFor="username">Username</label>
                                    <input
                                          type="text"
                                          id="username"
                                          onChange={(e) =>
                                                setEmail(e.target.value)
                                          }
                                    />
                              </div>
                              <div className="input-wrapper">
                                    <label htmlFor="password">Password</label>
                                    <input
                                          type="password"
                                          id="password"
                                          onChange={(e) =>
                                                setPassword(e.target.value)
                                          }
                                    />
                              </div>
                              <div className="input-remember">
                                    <input type="checkbox" id="remember-me" />
                                    <label htmlFor="remember-me">
                                          Remember me
                                    </label>
                              </div>
                              <small className="sing-in-error">
                                    {loginErreur}
                              </small>
                              <button className="sign-in-button">
                                    Sign In
                              </button>
                        </form>
                  </section>
            </main>
      );
}
