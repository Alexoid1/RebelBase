import React,{useState,useContext} from 'react';
import {FilterContext} from '../contexts/FilterContext'
import './NavigationBar.css'

function NavigationBar() {
    const {alls, setAlls, setSelected} = useContext(FilterContext)
    const handleSelectAll=()=>{
     
      if(alls) {
        return
      }else {
        setAlls(true)
        setSelected('itemSelected')
        setTimeout(()=>{
          setSelected('')
        },1000)
        
      } 
      
    }
    return (
      <div className="navigationBar">
          <nav>
            <ul className="navul">
              <li>
                <button className={ alls ? 'all  but' : 'all'} 
                onClick={handleSelectAll} 
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
  