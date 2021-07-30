import React,{useState,useContext} from 'react';
import { BsList,BsFillTriangleFill } from 'react-icons/bs';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DateContainer from './DateContainer';
import {FilterContext} from '../contexts/FilterContext'
import './ItemList.css' 



let items=[
    {
        name:"Problem",
        category: "Ideation",
        checked: true,
        date:'',
        time:'00:00',
        id:1

    },
    {
        name:"Solution",
        category: "Ideation",
        checked:true,
        date:'',
        time:'00:00',
        id:2
    },
    {
        name:"Team",
        category: "Ideation",
        checked:true,
        date:'',
        time:'00:00',
        id:3
    },
    {
        name:"Ecosystem",
        category: "Validation",
        checked:true,
        date:'',
        time:'00:00',
        id:4
    },
    {
        name:"Results",
        category: "Validation",
        checked:true,
        date:'',
        time:'00:00',
        id:5
    }


]

const reorder=(list,startIndex, endIndex)=>{
    const result=[...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex,0,removed);
    return result

}

function ItemList() {
    const {alls, selected, setSelected} = useContext(FilterContext)
    const[itemss,setItems]=useState(items);
    const[activeb,setActive]=useState(true);
    const arrayO=()=>{
        let arrayK=[]
        let oj={}  
           
        itemss.map((item)=>{
          
            if(!oj[item.category]){
                oj[item.category]=1
                return arrayK.push(item.category)
            }else {
                return null
            }
        })
        return arrayK

    }
    
    const handleSelectAll=()=>{
          setSelected('itemSelected')
          setTimeout(()=>{
            setSelected('')
          },1000)
           
      }
   
    const handleChangeCheckState=(e,index)=>{
        let currentItems=itemss
        if(activeb){
            currentItems[index].checked=false
            setActive(false)
            setItems([...currentItems])
        }else{
            currentItems[index].checked=true
            setActive(true)
            setItems([...currentItems])
        }
        
        
    };

    const lists=(arrayK)=>{

        const jxEleme=arrayK.map((list)=>{
            return (
                <div key={list}>
                
                   
                <div className='headers'>
                        <h3 className="inovation fontStyle">{list}</h3>
                        <button className="inovation2 fontStyle2" type='button' onClick={handleSelectAll}>select all in {list}</button>
                        <h3 className="inovation2 fontStyle hideElement">Due Date(Optional)</h3>
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
                    <Droppable droppableId={list+'s'}>{(droppableProvided)=>(

                        <div {...droppableProvided.droppableProps} 
                        ref={droppableProvided.innerRef}>
                        
                                
                            {itemss.map((item,index)=>{ 
                                
                                if(item.category===list){
                                    let count=-1
                                    count++
                                    return(
                                    
                                <Draggable key={item.name+list} draggableId={item.name} index={index}>
                                    {(draggableProvided)=>(
                                        <div {...draggableProvided.draggableProps} 
                                        ref={draggableProvided.innerRef} 
                                        {...draggableProvided.dragHandleProps} 
                                        className={'item '+ selected} >
                                            
                                                    <div className='item2 hideElement'>
                                                            <label className="containerC">
                                                                <input type="checkbox" onClick={(e)=>
                                                                    handleChangeCheckState(e,index)}/>

                                                                <span className={'checkmark '+(item.checked?'chekedtrue':'chekedfalse')} />
                                                            </label>
                                                    </div>
                                                    <div className={'cardBox ' + (activeb ? 'borderCardBoxOn' : 'borderCardBoxOff') }>
                                                        <div>
                                                                <h4>{item.name}</h4>
                                                            <p className="viewLink">view builder</p>
                                                                
                                                        </div>
                                                        <div className="greyBox">
                                                            <BsFillTriangleFill className={'triangle '+(item.checked?'triRed':'triGrey')}/>
                                                        </div>
                                                            
                                                    </div>
                                                

                                                <DateContainer 
                                                date={item.date} 
                                                time={item.time} 
                                                checked={item.checked} 
                                                items={itemss}
                                                index={count}
                                                 />                  
                                            </div>
                                        )
                                    }
                                </Draggable>)}})
                                
                            }
                                {droppableProvided.placeholder}
                        </div>
                    )}
                    </Droppable>
                </DragDropContext> 
        
        </div>
            )
        })
        return jxEleme
    }
    let filterElement
    if(!alls){
        filterElement=( 
            <div>
                <div className='headers'>
                        <h3 className="inovation fontStyle">Social Innovation</h3>
                        <h3 className="inovation2 fontStyle hideElement">Due Date(Optional)</h3>
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
                                    <Draggable key={item.name+index} draggableId={item.name} index={index} >
                                        {(draggableProvided)=>(
                                            <div {...draggableProvided.draggableProps} 
                                            ref={draggableProvided.innerRef} 
                                            {...draggableProvided.dragHandleProps} 
                                            className={'item ' + selected} >
                                                    <div className='hideElement'>
                                                        <BsList  className="iconList"/>
                                                    </div>
                                                    <div className='item2 hideElement'>
                                                        <label className="containerC">
                                                            <input type="checkbox" onClick={(e)=>
                                                                handleChangeCheckState(e,index)}/>

                                                            <span className={'checkmark '+(item.checked?'chekedtrue':'chekedfalse')} />
                                                        </label>
                                                    </div>
                                                        <div className={'cardBox ' + (activeb ? 'borderCardBoxOn':'borderCardBoxOff')}>
                                                            <div>
                                                                    <h4>{item.name}</h4>
                                                                <p className="viewLink">view builder</p>
                                                                
                                                            </div>
                                                            <div className="greyBox">
                                                                <BsFillTriangleFill className={'triangle '+(item.checked?'triRed':'triGrey')} />
                                                            </div>
                                                            
                                                        </div>
                                                    

                                                    <DateContainer 
                                                    
                                                    date={item.date} 
                                                    time={item.time} 
                                                    checked={item.checked}
                                                    items={itemss}
                                                    index={index}
                                                     />                  
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {droppableProvided.placeholder}
                            </div>)}
                    </Droppable>
                </DragDropContext> 
            </div>    )
    }else{
        filterElement= lists(arrayO())
    }

        
    return(
    <div className="itemContainer">
        <h1 className="title fontStyle">Select Builder Schedule - 2019 Fall Cohort</h1>
        <div className="boxContainer">
            <div>    
                      {filterElement}    
            </div>
            
        </div>
        <div className='buttonsContainer hideElement'>
            <button className='cancel' type='button'>
                Cancel
            </button>
            <button className='use' type='button'>
                use this builder scheduler
            </button>
        </div>
    </div>
  
    );
}
  
export default ItemList;
  