import {useState} from 'react';
import { BsList, BsCircleFill } from 'react-icons/bs';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './ItemList.css' 



let items=[
    {
        name:"Problem",
        category: "Ideation",
        checked:false,
        date:'00-00-00',
        time:'00:00'

    },
    {
        name:"Solution",
        category: "Ideation",
        checked:false,
        date:'00-00-00',
        time:'00:00'
    },
    {
        name:"Team",
        category: "Ideation",
        checked:false,
        date:'00-00-00',
        time:'00:00'
    },
    {
        name:"Ecosystem",
        category: "Validation",
        checked:false,
        date:'00-00-00',
        time:'00:00'
    },
    {
        name:"Results",
        category: "Validation",
        checked:false,
        date:'00-00-00',
        time:'00:00'
    }


]

const reorder=(list,startIndex, endIndex)=>{
    const result=[...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex,0,removed);
    return result

}

function ItemList() {
    const[itemss,setItems]=useState(items);
   
    const handleChangeCheckState=(e,index)=>{
        let currentItems=itemss
        if(e.target.value==='on'){
            currentItems[index].checked=true
            setItems(currentItems)
            console.log(currentItems,e.target.value)
        }else if(e.target.value==='off'){
                currentItems[index].checked=e.target.value
            setItems(currentItems)
            console.log(currentItems,e.target.value)
        }
        

       
    }

    return (

    <div className="itemContainer">
        <h1 className="title fontStyle">Select Builder Schedule - 2019 Fall Cohort</h1>
        <div className="boxContainer">
            <div>
                <div>
                    <h3 className="inovation fontStyle">Social Innovation</h3>
                </div>
                <DragDropContext onDragEnd={(result)=>{
                    const {source, destination}=result;
                    if(!destination){
                        return;
                    }
                    if(source.index===destination.index&&source.droppableId===destination.droppableId){
                        return;
                    }
                    setItems((prevItems)=>{
                        return reorder(prevItems,source.index,destination.index)
                    })

                }}>
                    <Droppable droppableId="items">{(droppableProvided)=>(

                            <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
                        
                                
                                {itemss.map((item,index)=>(
                                    <Draggable key={item.name+index} draggableId={item.name} index={index}>
                                        {(draggableProvided)=>(
                                            <div {...draggableProvided.draggableProps} ref={draggableProvided.innerRef} {...draggableProvided.dragHandleProps} className="item" >
                                                    <div>
                                                        <BsList  className="iconList"/>
                                                    </div>
                                                    <div>
                                                        <label className="containerC">
                                                            <input type="checkbox" onChange={(e)=>
                                                                handleChangeCheckState(e,index)}/>

                                                            <span className={'checkmark '+(item.checked?'chekedtrue':'chekedfalse')} />
                                                        </label>
                                                    </div>
                                                    <div className="cardBox">
                                                        <div>
                                                                <h4>{item.name}</h4>
                                                                <p className="viewLink">view builder</p>
                                                            
                                                        </div>
                                                        <div className="greyBox"></div>
                                                    </div>
                                                    <div className="dateContainer">
                                                        <input className="date" placeholder="MM-DD-YYY" type="date"></input>
                                                        <input className="hour" type="time"></input>
                                                    </div>
                                                
                                            </div>
                                        )}
                                    </Draggable>
                                    
                                ))}
                                {droppableProvided.placeholder}
                            </div>)}
                    </Droppable>
                </DragDropContext>    
                
            </div>  

        </div>
    </div>
  
    );
}
  
export default ItemList;
  