import React, { useState } from 'react';


const Accordian = ({que, id, selectaccordian, select}) => {

    

    return ( 
        <div class="accordian_containt">
            <div 
            class='title'
            >
                <h3>{que.quesion}</h3>
                <span 
                onClick={()=> selectaccordian(id)}   
                style={{fontSize:"29px"}}>{(id === select) ? "-" : "+"}</span>
            </div>
            {(id === select) ? <p class='content'>{que.answer}</p> : <></>}
             
            
        </div>
    )
}

export default Accordian;