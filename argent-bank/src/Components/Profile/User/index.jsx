import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFirstName, getLastName } from '../../../Store';
import { editUserProfil, userProfil } from '../../../Actions';
import './index.css';
import { useNavigate } from 'react-router-dom';

/**
 * 
 * @function User
 * @returns  template a component block belonging to the Profil page
 * @function handleClick set the status to true to open the firstname/firstname modification form
 * @function handleClickClose set the status to false to open the firstname/firstname modification form
 * @function handleSubmit When we change the values of the form and we validate the form, we send the store with the new value of the report. and we send it to the api
 */

export default function User() {
      const dispatch = useDispatch();
      const Navigate = useNavigate();

      const [newFirstName, setNewFirstName] = useState('');
      const [newLastName, setNewLastName] = useState('');
      const [newEditName, setNewEditName] = useState(false);

      const token = useSelector((state) => state?.token?.value);
      const firstName = useSelector((state) => state?.firstName?.value);
      const lastName = useSelector((state) => state?.lastName?.value);
      
      useEffect(() => {
            const user = userProfil(token);
            user.then(obj => {
                  dispatch(getFirstName(obj?.firstName));
                  dispatch(getLastName(obj?.lastName));
            });
            if (token === '') {
                  Navigate("/404")
            }
      }, []);

      function handleClick(event) {
            setNewEditName(true);
      }
      function handleClickClose(event) {
            setNewEditName(false);
      }

      const handleSubmit = (event) => {
            event.preventDefault();
            dispatch(getFirstName(newFirstName));
            dispatch(getLastName(newLastName));
            const user = {
                  firstName: newFirstName,
                  lastName: newLastName,
            };
            editUserProfil(token, user);
      };
      return (
            <div>
                  <div className="header">
                        <h1>
                              Welcome back
                              <br />
                              {firstName + ' ' + lastName}
                        </h1>
                        <button className="edit-button" onClick={handleClick}>
                              Edit Name
                        </button>
                  </div>
                  <>
                        {newEditName === false ? (
                              <> </>
                        ) : (
                              <section className="update-name">
                                    <form>
                                          <div className="input-wrapper">
                                                <label htmlFor="firstName">
                                                      Firstname
                                                </label>
                                                <input
                                                      type="text"
                                                      id="firstName"
                                                      placeholder={firstName}
                                                      onChange={(e) =>
                                                            setNewFirstName(
                                                                  e.target.value
                                                            )
                                                      }
                                                      required
                                                />
                                          </div>
                                          <div className="input-wrapper">
                                                <label htmlFor="lastName">
                                                      Lastname
                                                </label>
                                                <input
                                                      type="text"
                                                      id="lastName"
                                                      placeholder={lastName}
                                                      onChange={(e) =>
                                                            setNewLastName(
                                                                  e.target.value
                                                            )
                                                      }
                                                      required
                                                />
                                          </div>
                                          <button
                                                onClick={handleSubmit}
                                                className="sign-in-button"
                                          >
                                                Edit
                                          </button>
                                          <button
                                                className="sign-in-button"
                                                onClick={handleClickClose}
                                          >
                                                Cancel
                                          </button>
                                    </form>
                              </section>
                        )}
                  </>
            </div>
      );
}
