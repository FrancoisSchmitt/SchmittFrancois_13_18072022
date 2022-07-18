import Logo from '../../../Assets/argentBankLogo.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
      return (
            <nav className="main-nav">
                  <NavLink
                        to="/"
                        className={(isActive) =>
                              'nav-link-home Error-return-menu' +
                              (!isActive ? ' unselected' : '')
                        }
                  >
                        <img
                              className="main-nav-logo-image"
                              src={Logo}
                              alt="Argent Bank Logo"
                        />
                        <h1 className="sr-only">Argent Bank</h1>
                  </NavLink>
                  <div>
                        <NavLink
                              to="/Login"
                              className={(isActive) =>
                                    'nav-link-home Error-return-menu' +
                                    (!isActive ? ' unselected' : '')
                              }
                        >
                              <i className="fa fa-user-circle"></i>
                              Sign In
                        </NavLink>
                  </div>
            </nav>
      );
}
