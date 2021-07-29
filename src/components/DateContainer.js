import {useState,useEffect,React} from 'react';
import './DateContainer.css'

function DateContainer({datee,time,checked}) {
    const[currentDate,setCurrentDateC]=useState(datee);
    const handleDateChange=(e)=>{
        console.log(e.target.value)
    }
        let dateC
            if(checked){
               dateC=(
                    <div className='dateContainer'>
                        <div>
                            <input className='date ' placeholder="MM-DD-YYY" onChange={e=>handleDateChange(e)} type="date"></input>
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