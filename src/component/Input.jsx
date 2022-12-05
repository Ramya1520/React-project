import React, { useState } from 'react';
import ReactDeleteRow from 'react-delete-row';
var id=0;
function Input(){     
    const [totalTransaction,setTotalTransaction]=useState([])
    const [currentTransaction,SetCurrentTransaction]=useState ({amount:"",notes:"",type:""})
    function changehandle(e){
        SetCurrentTransaction({...currentTransaction,[e.target.name]: e.target.value})
    }
    function changehandle2(){
        id=id+1;
        console.log(id)
        setTotalTransaction([...totalTransaction,{amount,notes,type}])
    }
    let{amount,notes,type}=currentTransaction;
    function changhandle(){
        console.log(totalTransaction)
        console.log(currentTransaction)
        SetCurrentTransaction({amount:"",notes:"",type:""})
    }
    return(
        <div className="Input">
        <h4>Expense Tracker</h4>   
        <p>Initial amount:<span  id="initial_amount">1000</span></p>
        <label>Amount:<input  type="number" id="amount" autoComplete='off' name="amount" value={currentTransaction.amount}onChange={changehandle}/></label><br></br>
        <label>Notes :<input type="text" id="nptes" autoComplete='off' name="notes" value={currentTransaction.notes} onChange={changehandle}/></label> <br></br>
        <label>type :<input type="text" id="type" autoComplete='off' name="type" value={currentTransaction.type} onChange={changehandle}/></label> <br></br>
        <button onClick={changehandle2}>Add it</button>
        <button onClick={changhandle}>Generate</button>
        <table border={1} width="30%" cellPadding={10}>
            <tbody>
            <tr>
                <td>Amount</td>
                <td>Notes</td>
                <td>Type</td>
                <td>Action</td>
            </tr>
            {
            totalTransaction.map((item, i) => { return (
            <ReactDeleteRow key={i} data={item} onDelete={ item => { return window.confirm(`Are you sure?`) }}>
                                <td>{item.amount}</td>
                                <td>{item.notes}</td>
                                <td>{item.type}</td>
            </ReactDeleteRow> )
                }
            )
            }
            </tbody>
        </table>
        </div>
        )
}
export default Input



