import {useState,useEffect,React} from 'react';
import './DateContainer.css'

function DateContainer({date,time,checked,items,index}) {
    const[currentDate,setCurrentDate]=useState(date);
    const[currentTime,setCurrentTime]=useState(time);
    const [ites,setItes]=useState(items)
    const handleDateChange=(e)=>{
        console.log(typeof(e.target.value))
        let currentItems=items
        
        currentItems[index].date=e.target.value
        setCurrentDate(e.target.value)
        setItes([...currentItems])
        

    }

    const handleTimeChange=(e)=>{
        console.log(typeof(e.target.value))
        let currentItems=items
        
        currentItems[index].time=e.target.value
        setCurrentTime(e.target.value)
        setItes([...currentItems])
        

    }
        let dateC
            if(checked){
               dateC=(
                    <div className='dateContainer'>
                        <div>
                            <input className='date '  value={currentDate} placeholder="MM-DD-YYY" onChange={e=>handleDateChange(e)} type="date"></input>
                            <input className='hour ' value={currentTime} onChange={e=>handleTimeChange(e)} type="time"></input>
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