
import React from 'react'
// component

function Mobile({brandname="no name",brandprice,offer=0}){
    return(
        <>
        <div class="card" >
  
  <div class="card-body">
    <h5 class="card-title">{brandname}</h5>
    <p class="card-text">{"price :"+brandprice}</p>
    <p>{"offer :"+offer}</p>
    
  </div>
</div>
      
        
        </>
    );
}

export default Mobile



