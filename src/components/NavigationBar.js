import React,{useContext} from 'react';
import {FilterContext} from '../contexts/FilterContext'
import './NavigationBar.css'

function NavigationBar() {
    const {alls, setAlls, setSelected} = useContext(FilterContext)
    const handleSelectAll=()=>{
     
      if(alls) {
        setAlls(false)
      }else {
        setAlls(true)
        setSelected('itemSelected')
        setTimeout(()=>{
          setSelected('')
        },1000)
        
      } 
      
    }
    return (
      <>
          

        <div className="navigationBar">
          <h1 className="title3">Select Builder Schedule - 2019 Fall Cohort</h1>
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
                <li className='hide'>
                  <button className={ alls ? 'social': 'social but'} 
                  onClick={(e)=>{!alls ? setAlls(true) : setAlls(false)}} 
                  type="button">
                    Social Innovation
                  </button>
                </li>
                <li className='dropSelect'>
                    <select name="cars" id="cars">
                      <option value="volvo">Social Innovation</option>
                      <option value="saab">Template 1</option>
                      <option value="mercedes">Template 2</option>
                      <option value="audi">Template 3</option>
                    </select>
                </li>
              </ul>
            </nav>
            <div className='buttonHide'>
              <button className='use' type='button'>
                  use this builder scheduler
              </button>
            </div>
        </div>
      </>
    );
}
  
export default NavigationBar;
  