import React, { useState } from 'react';
function Input(){ 
    const [inputarr,setInputarr]=useState([])
    const [inputdata,SetInputdata]=useState ({amount:"",notes:"",type:""})
    function changehandle(e){
        SetInputdata({...inputdata,[e.target.name]: e.target.value})
       
    }
    function changehandle2(){
        console.log(inputarr)
    }
    let{amount,notes,type}=inputdata;
    function changhandle(){
        setInputarr([...inputarr,{amount,notes,type}])
        console.log(inputarr);
        console.log(inputdata)
        SetInputdata({amount:"",notes:"",type:""})
    }
        return(
        <div className="Input">
        <h4>Expense Tracker</h4>
        <p>Initial amount:<span  id="initial_amount">1000</span></p>
        <label>Amount:<input  type="number" id="amount" autoComplete='off' name="amount" value={inputdata.amount}onChange={changehandle}/></label><br></br>
        <label>Notes :<input type="text" id="amount" autoComplete='off' name="notes" value={inputdata.notes} onChange={changehandle}/></label> <br></br>
        <label>type :<input type="text" id="type" autoComplete='off' name="type" value={inputdata.type} onChange={changehandle}/></label> <br></br>
        <button onClick={changehandle2}>Add it</button>
        <button onClick={changhandle}>Generate</button>
        <table border={1} width="30%" cellPadding={10}>
            <tbody>
            <tr>
                <td>Amount</td>
                <td>Notes</td>
                <td>Type</td>
            </tr>
            {
            inputarr.map(
                (info,ind)=>{
                        return(
                            <tr key={ind}>
                                <td>{info.amount}</td>
                                <td>{info.notes}</td>
                                <td>{info.type}</td>
                        </tr>
                    )
                }
            )
            }
            </tbody>
        </table>
        </div>
        
        )
}
export default Input
