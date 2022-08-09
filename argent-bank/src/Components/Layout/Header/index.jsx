import Logo from '../../../Assets/argentBankLogo.png';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';

/**
 * @function Header
 * @returns footer template
 * @returns If token.lenght is different from 0 then it changes the navigation with the addition of the logout button and the name of the connected user 
 * @function handleClick If the user is logged in and clicks on the logout button the user will be logged out 
 */
export default function Header() {
      const token = useSelector((state) => state.token.value);
      const firstName = useSelector((state) => state.firstName.value);
      const lastName = useSelector((state) => state.lastName.value);
      const dispacth = useDispatch();
      function handleClick(event) {
            dispacth(token(null));
            dispacth(firstName(null));
            dispacth(lastName(null));
      }
      return (
            <>
                  {token.length === 0 ? (
                        <nav className="main-nav">
                              <NavLink className="main-nav-item" to="/">
                                    <img
                                          className="main-nav-logo-image"
                                          src={Logo}
                                          alt="Argent Bank Logo"
                                    />
                                    <h1 className="sr-only">Argent Bank</h1>
                              </NavLink>
                              <div>
                                    <NavLink
                                          className="main-nav-item"
                                          to="/Login"
                                    >
                                          <i className="fa fa-user-circle"></i>
                                          Sign In
                                    </NavLink>
                              </div>
                        </nav>
                  ) : (
                        <nav className="main-nav">
                              <NavLink className="main-nav-item" to="/">
                                    <img
                                          className="main-nav-logo-image"
                                          src={Logo}
                                          alt="Argent Bank Logo"
                                    />
                                    <h1 className="sr-only">Argent Bank</h1>
                              </NavLink>
                              <div>
                                    <NavLink
                                          className="main-nav-item"
                                                to="/profile"
                                    >
                                          <i className="fa fa-user-circle"></i>
                                          {firstName}
                                    </NavLink>
                                    <NavLink
                                          className="main-nav-item"
                                          to="/"
                                          onClick={handleClick}
                                    >
                                          <i className="fa fa-sign-out"></i>
                                          sign Out
                                    </NavLink>
                              </div>
                        </nav>
                  )}
            </>
      );
}
