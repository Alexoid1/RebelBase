import React from 'react';
import './NavigationBar.css'

function NavigationBar() {
    return (
      <div className="navigationBar">
          <nav>
            <ul>
              <li>
                <button type="button">
                  All
                </button>
              </li>
            </ul>
          </nav>
      </div>
    );
}
  
export default NavigationBar;
  