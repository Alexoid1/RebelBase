import {useState,useEffect,React} from 'react';
import './DateContainer.css'

function DateContainer({checked}) {
 
        let dateC
            if(checked){
               dateC=(
                    <div className='dateContainer'>
                        <div>
                            <input className='date ' placeholder="MM-DD-YYY" type="date"></input>
                            <input className='hour ' type="time"></input>
                        </div>
                    </div>
                 )
            }else{
                dateC= (
                    <div className='dateContainer'></div>
                )
            }
        
        return dateC;
}
  
export default DateContainer;