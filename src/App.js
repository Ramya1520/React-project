import './App.css';
import React from 'react';
import {useState} from 'react';

function App() {
    const[inputarr,setInputArr]=useState([])
    const [inputdata,SetInputdata]=useState({amount:"",notes:"",type:""})

    function changehandle(e){
        SetInputdata({...inputdata,[e.target.name]:e.target.value})
        console.log("OOOOOOOOOO",inputdata);
        console.log("name:"+e.target.name)
        console.log("value:"+e.target.value)
        
    }
    let{amount,notes,type}=inputdata;
    
    function add(value){
      type = (value==='credit') ? "credit" : "debit";
      
    }
    
    function changhandle(){
        setInputArr([...inputarr,{amount,notes,type}])
        console.log(inputdata)

        var a=SetInputdata({amount:"",notes:"",type:""}) 
        inputarr.push(a);
    } 
    function changehandle2(){
        console.log(inputarr)
        
    }
    
    
    
    return (
      <div className="App"> 
        amount:<input type="" name="amount" value={inputdata.amount} onChange={changehandle}/><br></br>
        <p></p>
        <p>initial amount:<span id="initial_amount">1000</span></p>
        notes:<input type="" id="notes" name="notes" value={inputdata.notes} onChange={changehandle}/><br></br><br></br>
        <button onClick={changhandle}>add</button><br></br><br></br>
        <button onClick={changehandle2}>details</button>
        <select value="" id="select" onsubmit="add();">
        <option> Choose</option> 
        <option id="choose" type="button" value="" >choose</option> 
        <option  type="button" value="credit" >credit</option> 
        <option  type="button" value="debit" >debit</option> 
</select>  
        {/* <table id="myTable">
          <tr>
            <th>type</th>
            <th>amount</th>
            <th>balance</th>
            <th>spend</th>
            <th>date</th>
            <th>action</th>
          </tr>
        </table>
      */}
      </div>
    ); 
}

export default App;
