import React,{useState,useContext} from 'react';
import {FilterContext} from '../contexts/FilterContext'
import './NavigationBar.css'

function NavigationBar() {
    const {alls,setAlls} = useContext(FilterContext)
    return (
      <div className="navigationBar">
          <nav>
            <ul className="navul">
              <li>
                <button className={ alls ? 'all  but' : 'all'} 
                onClick={(e)=>{alls ? setAlls(false) : setAlls(true)}} 
                type="button">
                  All
                </button>
                <p className="temple">Templates</p>
              </li>
              <li>
                <button className={ alls ? 'social': 'social but'} 
                onClick={(e)=>{!alls ? setAlls(true) : setAlls(false)}} 
                type="button">
                  Social Innovation
                </button>
              </li>
            </ul>
          </nav>
      </div>
    );
}
  
export default NavigationBar;
  