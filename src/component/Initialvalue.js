import React from 'react';
import {useState} from 'react';
function InitialValue(props){
    const [initialAmount] = useState('1000')
    
    

    return(
        <p>initial Amount:<span>{initialAmount}</span></p>
    )
    
}
export default InitialValue;