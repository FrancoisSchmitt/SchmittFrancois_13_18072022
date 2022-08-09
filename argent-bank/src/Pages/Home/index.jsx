import Features from '../../Components/Home/Feature';
import Hero from '../../Components/Home/Hero';
import Chat from '../../Assets/icon-chat.png';
import Money from '../../Assets/icon-money.png';
import Security from '../../Assets/icon-security.png';

import '../../App.css';

/**
 * 
 * @function Home
 * @returns import template of the main page to the website
 */

export default function Home() {
      return (
            <div>
                  <Hero />
                  <section className="features">
                        <h2 className="sr-only">Features</h2>
                        <Features
                              image={Chat}
                              title="You are our #1 priority"
                              desc=" Need to talk to a representative? You can get in
                              touch through our 24/7 chat or through a phone
                              call in less than 5 minutes."
                        />
                        <Features
                              image={Money}
                              title="You are our #1 priority"
                              desc=" Need to talk to a representative? You can get in
                              touch through our 24/7 chat or through a phone
                              call in less than 5 minutes."
                        />
                        <Features
                              image={Security}
                              title="You are our #1 priority"
                              desc=" Need to talk to a representative? You can get in
                              touch through our 24/7 chat or through a phone
                              call in less than 5 minutes."
                        />
                  </section>
            </div>
      );
}
