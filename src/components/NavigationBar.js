import React from 'react';
import './NavigationBar.css'

function NavigationBar() {
    return (
      <div className="navigationBar">
          <nav>
            <ul className="navul">
              <li>
                <button className="all" type="button">
                  All
                </button>
                <p className="temple">Templates</p>
              </li>
              <li>
                <button className="social">Social Innovation</button>
              </li>
            </ul>
          </nav>
      </div>
    );
}
  
export default NavigationBar;
  