import {useState,React} from 'react';
import './DateContainer.css'

function DateContainer({date,time,checked,items,index}) {
    const[currentDate,setCurrentDate]=useState(date);
    const[currentTime,setCurrentTime]=useState(time);

    const [ites,setItes]=useState(items)
    const handleDateChange=(e)=>{
        
        let currentItems=ites
        
        currentItems[index].date=e.target.value
        setCurrentDate(e.target.value)
        setItes([...currentItems])
        

    }

    const handleTimeChange=(e)=>{
        
        let currentItems=items
        
        currentItems[index].time=e.target.value
        setCurrentTime(e.target.value)
        setItes([...currentItems])
        

    }
        let dateC
            
               dateC=(
                    <div className='dateContainer hideElement'>
                        <div className={!checked?'msgUn':''}> 
                            <input className='date '  value={currentDate}  onChange={e=>handleDateChange(e)} type="date"></input>
                            <input className='hour ' value={currentTime} onChange={e=>handleTimeChange(e)} type="time"></input>
                        </div>
                    </div>
                 )
            
        
        return dateC;
}
  
export default DateContainer;