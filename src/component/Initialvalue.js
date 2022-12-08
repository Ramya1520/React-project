import React, { useState } from 'react';
// import {useState} from 'react';
function InitialValue(props){
    const [initialAmount,setInitialAmount]=useState(props.initialAmount)
    return(
        <div>
            <p>initialAmount::<span>{initialAmount}</span></p>
        </div>
    )

}
export default InitialValue;