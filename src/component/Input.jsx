import React, { useState, useRef } from "react"
// import Submit from "./Submit"
import './StyleSheet.css'
import EditList from "./Update"
import InitialValue from './Initialvalue'
function Crud() {
    const [val,setVal]=useState(1000)

    const [list, setList] = useState([])
    const [listVal, setListVal] = useState({
        id:'',
        amount:'',
        notes: '',
        type: ''
    })
    const [update, setUpdate] = useState(-1)
    const idRef=useRef()
    const amountRef = useRef()
    const notesRef = useRef()
    const typeRef = useRef()

    const valSubmit = (event) => {
        event.preventDefault();
        if (listVal.amount && listVal.notes && listVal.type) { setList([...list, listVal]) }
        if (listVal.id && listVal.amount && listVal.notes && listVal.type) { setList([...list, listVal]) }
        idRef.current.value=''
        amountRef.current.value = ''
        notesRef.current.value = ''
        typeRef.current.value = ''
    }
    function handleEdit(index) {
        setUpdate(index)
    }   
    function handleDelete(id) {
        console.log("first")
        const newList = list.filter((li) => (li.id !== id))
        setList(newList)
    }
    function updateData(updatedData) {
        console.log(updatedData, "CRUD")    
        const newList = list.map((li, index) => (update === index ?
            { ...li, id: updatedData.id,amount: updatedData.amount, notes: updatedData.notes, type: updatedData.type } : li))
        setList(newList)
        setUpdate(-1)
     }
    const handleUpdate = (event) => {
        event.preventDefault();
    }
    function credit (){
        var length = list.length;
        var index1=length-1
        console.log("length:"+index1)

       var current_amount=list[length-1].amount;
        console.log("@@@@@@@@@",current_amount)
        console.log("val",val);
        var balance=parseInt(current_amount)+parseInt(val);
        setVal(balance);
    }
    function debit(){
        var length = list.length;
        var index1=length-1
        console.log("length:"+index1)
        var current_amount=list[length-1].amount;
        console.log("@@@@@@@@@",current_amount)
        console.log("val",val);
        var balance=parseInt(val)-parseInt(current_amount);
        console.log(parseInt(current_amount))
        console.log(parseInt(val))
        setVal(balance);
    }
    return (
        <div>
            <h1>Expense Tracker</h1>
            <p><InitialValue  initialAmount={val}/></p>            
            <form className="forms" >
            <label>Id :</label>
            <input type="id" value={list.id}
              onChange={e => setListVal({ ...listVal, id: e.target.value })} ref={idRef} />
                <label>Amount :</label>
                <input type="number" value={list.amount}
                    onChange={e => setListVal({ ...listVal, amount: e.target.value })} ref={amountRef} />
                <label>Notes :</label>
                <input type="text" value={list.notes}
                    onChange={e => setListVal({ ...listVal, notes: e.target.value })} ref={notesRef} />
                <label>Type :</label>
                <input type="text" value={list.type}
                    onChange={e => setListVal({ ...listVal, type: e.target.value })} ref={typeRef} />   
            </form>
            {/* <select>
                <option><button type="submit" onClick={valSubmit}>Add</button></option>
                <option>Choose</option>
                <option><button type="credit" value={""} onSelect={credit}>credit</button></option>
                <option><button type="debit" value={""} onSelect={debit}>debit</button></option>
            </select> */}
            <div className="button">
                <button type="submit" onClick={valSubmit}>Add</button>
                <button type="credit" value={""} onClick={credit}>credit</button>
                <button type="debit" value={""} onClick={debit}>debit</button>
                </div>
            <div className="myTable">
                <form onClick={handleUpdate}>
                    <table >
                        <td>Id</td>
                        <td>Amount</td>
                        <td>Notes</td>
                        <td>Type</td>
                        <td>Action</td>
                        {
                            list.map((element, index) => (
                                update === index ? <EditList current={element} update={updateData} /> :
                                    <tr key={index}>
                                        <td>{element.id}</td>
                                        <td>{element.amount}</td>
                                        <td>{element.notes}</td>
                                        <td>{element.type}</td>
                                        <td>
                                            <button className="edit" onClick={() => handleEdit(index)}>Edit</button>
                                            <button className="delete" onClick={() => handleDelete(element.amount)}>Delete</button>
                                        </td>
                                    </tr>
                            ))
                        }
                    </table>
                </form>
            </div>
        </div>
    )
  
}
export default Crud
