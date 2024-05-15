import React from "react";
import './apropos.scss';



const Level =(props)=>{

  return(
    <>
  
             
                 <span> 
                    <span className={`dot ${props.dot1}`} ></span>
                    <span className={`dot ${props.dot2}`} ></span>
                    <span className={`dot ${props.dot3}`} ></span>
                    <span className={`dot ${props.dot4}`} ></span> 
                  </span>
              
  
    </>
  )
}

export default Level;