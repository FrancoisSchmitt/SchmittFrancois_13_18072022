/**
 *
 * @function Transaction
 * @returns  template a component block belonging to the Profil page
 */
export default function Transaction({ title, price, amount, button }) {
      return (
            <section className="account">
                  <div className="account-content-wrapper">
                        <h3 className="account-title">{title}</h3>
                        <p className="account-amount">{price}</p>
                        <p className="account-amount-description">{amount}</p>
                  </div>
                  <div className="account-content-wrapper cta">
                        <button className="transaction-button">{button}</button>
                  </div>
            </section>
      );
}
