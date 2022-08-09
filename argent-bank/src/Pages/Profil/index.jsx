import User from '../../Components/Profile/User';
import Transaction from '../../Components/Profile/Transaction';
import '../../App.css';


/**
 * 
 * @function Profil
 * @returns  import template of the Profil page to the website
 */

export default function Profil() {
      return (
            <main className="main bg-dark">
                  <User />
                  <Transaction
                        title="Argent Bank Checking (x8349)"
                        price="$2,082.79"
                        amount="Available Balance"
                        button="View transactions"
                  />
                  <Transaction
                        title="Argent Bank Savings (x6712)"
                        price="$10,928.42"
                        amount="Available Balance"
                        button="View transactions"
                  />
                  <Transaction
                        title="Argent Bank Credit Card (x8349)"
                        price="$184.30"
                        amount="Current Balance"
                        button="View transactions"
                  />
            </main>
      );
}
