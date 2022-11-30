import './App.css';
import React from 'react';
import {useState} from 'react';

function App() {
    const[inputarr,setInputArr]=useState([])
    const [inputdata,SetInputdata]=useState({ amount:"",notes:""})

    function changehandle(e){
        SetInputdata({...inputdata,[e.target.name]:e.target.value})
        console.log();
    }

    let{amount,notes}=inputdata;
    function changhandle(){
        setInputArr([...inputarr,{amount,notes}])
        console.log(inputdata)
        var a=SetInputdata({amount:"",notes:""}) 
        inputarr.push(a);

    } 
    function changehandle2(){
        console.log(inputarr)

    }
    return (
      <div className="App"> 
        amount:<input type="" name="amount" value={inputdata.amount} onChange={changehandle}/><br></br>
        <p></p>
        notes:<input type="" name="notes" value={inputdata.notes} onChange={changehandle}/><br></br><br></br>
        <button onClick={changhandle}>add</button><br></br><br></br>
        <button onClick={changehandle2}>details</button>
      </div>
    ); 
}

export default App;
