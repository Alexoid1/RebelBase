import React from 'react';
import { BsList, BsCircleFill } from 'react-icons/bs';
import './ItemList.css' 


function ItemList() {

const items=[
    {
        name:"Problem",
        categoty: "Ideation"
    },
    {
        name:"Solution",
        categoty: "Ideation"
    },
    {
        name:"Team",
        categoty: "Ideation"
    },
    {
        name:"Ecosystem",
        categoty: "Validation"
    },
    {
        name:"Results",
        categoty: "Validation"
    }


]
    return (

    <div className="itemContainer">
        <h1 className="title fontStyle">Select Builder Schedule - 2019 Fall Cohort</h1>
        <div className="boxContainer">
            <div>
                <div>
                    <h3 className="inovation fontStyle">Social Innovation</h3>
                </div>
               
                <div>
                    <div className="item">
                        <div>
                            <BsList  className="iconList"/>
                        </div>
                        <div>
                            <BsCircleFill  className="iconCircle"/>
                        </div>
                        <div className="cardBox">
                            <div>
                                    <h4>Problem</h4>
                                    <p className="viewLink">view builder</p>
                                 
                            </div>
                            <div className="greyBox"></div>
                        </div>
                        <div className="dateContainer">
                            <input className="date" placeholder="MM-DD-YYY" type="date"></input>
                            <input className="hour" type="time"></input>
                        </div>

                    </div>
                    <div className="item">

                    </div>
                    <div className="item">

                    </div>
                </div>
            </div>  

        </div>
    </div>
  
    );
}
  
export default ItemList;
  