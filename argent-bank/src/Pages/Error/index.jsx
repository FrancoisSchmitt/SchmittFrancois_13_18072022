import './index.css';
import { NavLink } from 'react-router-dom';

/**
 *
 * @function Error
 * @returns Template of Error Page 404
 */

export default function Error() {
      return (
            <main className="main bg-dark">
                  <h1 className="Error-type">404</h1>
                  <h3 className="Error-desc">
                        Cette page n'existe pas veuillez vous rendre sur la{' '}
                        <NavLink className="Error-link" to="/">
                              page d'accueil
                        </NavLink>
                  </h3>
            </main>
      );
}
