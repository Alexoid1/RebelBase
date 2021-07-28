import {useState,React} from 'react';
import './DateContainer.css'

function DateContainer({checked}) {
    
        return(
                    <div className='dateContainer'>
                        <div>
                            <input className='date ' placeholder="MM-DD-YYY" type="date"></input>
                            <input className='hour ' type="time"></input>
                        </div>
                    </div>
                 )
            
}
  
export default DateContainer;