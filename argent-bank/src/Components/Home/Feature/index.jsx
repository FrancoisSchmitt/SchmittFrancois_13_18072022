/**
 *
 * @function Feature
 * @returns  template a component block belonging to the home page
 */
export default function Feature({ image, title, desc }) {
      return (
            <div className="feature-item">
                  <img src={image} alt="Chat Icon" className="feature-icon" />
                  <h3 className="feature-item-title">{title}</h3>
                  <p>{desc}</p>
            </div>
      );
}
