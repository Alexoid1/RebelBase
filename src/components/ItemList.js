import React from 'react';
import { BsList, BsCircleFill } from 'react-icons/bs';
import './ItemList.css' 

function ItemList() {
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
                        <div>

                        </div>
                        <div></div>

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
  