import {useState} from 'react';
import { BsList, BsCircleFill } from 'react-icons/bs';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './ItemList.css' 


const items=[
    {
        name:"Problem",
        category: "Ideation"
    },
    {
        name:"Solution",
        category: "Ideation"
    },
    {
        name:"Team",
        category: "Ideation"
    },
    {
        name:"Ecosystem",
        category: "Validation"
    },
    {
        name:"Results",
        category: "Validation"
    }


]

function ItemList() {
    const[itemss,setItems]=useState(items)

    return (

    <div className="itemContainer">
        <h1 className="title fontStyle">Select Builder Schedule - 2019 Fall Cohort</h1>
        <div className="boxContainer">
            <div>
                <div>
                    <h3 className="inovation fontStyle">Social Innovation</h3>
                </div>
                <DragDropContext>
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
                                                        <BsCircleFill  className="iconCircle"/>
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
  