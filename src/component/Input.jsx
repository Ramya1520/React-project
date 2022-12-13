import React, { useState, useRef, useEffect } from "react"
// import Submit from "./Submit"
import './StyleSheet.css'
import EditList from "./Update"
var no = 1
function Crud() {
    console.log("no:", no)
    const [type, setType] = useState()
    const [val, setVal] = useState(1000)
    const [list, setList] = useState([])
    const [listVal, setListVal] = useState({
        id: '',
        amount: '',
        notes: '',
        type: '',
        bal: ''
    })

    const [update, setUpdate] = useState(-1)
    const amountRef = useRef()
    const notesRef = useRef()

    var a = []
    a.push(listVal);
    console.log("a===", a)
    var length = a.length;
    console.log("length:" + length)
    var current_amount = a[length - 1].amount;
    console.log("current value", current_amount)
    console.log("val", val);

    function credit() {
        var balance = parseInt(current_amount) + parseInt(val);
        setVal(balance);
        var types = "credit"
        setType(types);
        setListVal({ ...listVal, type: types })
    }

    function debit() {
        var balance = parseInt(val) - parseInt(current_amount);
        setVal(balance);
        var types = "debit"
        setType(types);
        console.log("type===============>", type)
        setListVal({ ...listVal, type: types })
    }

    const valSubmit = (event) => {
        no = no + 1
        event.preventDefault();
        if (listVal.id || listVal.amount || listVal.notes || listVal.type || listVal.bal) { setList([...list, listVal]) }
        amountRef.current.value = ''
        notesRef.current.value = ''
        console.log("list=================================>:", list)
    }

    useEffect(() => {
        setListVal({ ...listVal, bal: val })
    }, [val])
    useEffect(() => {
        setListVal({ ...listVal, id: no })
    }, [no])
    
    function handleDelete(id) {
        console.log("first", id)
        const newList = list.filter((li) => (li.id !== id))
        setList(newList)
    }

    function updateData(updatedData) {
        console.log(updatedData, "CRUD")
        const newList = list.map((li, index) => (update === index ?
            { ...li, id: updatedData.id, amount: updatedData.amount, notes: updatedData.notes, type: updatedData.type } : li))
        setList(newList)
        setUpdate(-1)
    }

    const handleUpdate = (event) => {
        event.preventDefault();
    }

    return (

        <div>
            <h1>Expense Tracker</h1>
            <p>InitialAmount:{val}</p>
            <form className="forms" >
                <label>Amount :</label>
                <input type="number" value={list.amount}
                    onChange={e => setListVal({ ...listVal, amount: e.target.value })} ref={amountRef} />
                <label>Notes :</label>
                <input type="text" value={list.notes}
                    onChange={e => setListVal({ ...listVal, notes: e.target.value })} ref={notesRef} />      
            </form>
            <div className="button">
                <button type="credit" value={""} onClick={credit}>credit</button>
                <button type="debit" value={""} onClick={debit}>debit</button>
                <button type="submit" onClick={valSubmit}>Add</button>
            </div>

            <div className="myTable">
                <form onClick={handleUpdate}>
                    <table >
                        <td>Id</td>
                        <td>Amount</td>
                        <td>Notes</td>
                        <td>Type</td>
                        <td>bal</td>
                        <td>Action</td>
                        {
                            list.map((element, index) => (
                                update === index ? <EditList current={element} update={updateData} /> :
                                    <tr key={index}>
                                        <td>{element.id}</td>
                                        <td>{element.amount}</td>
                                        <td>{element.notes}</td>
                                        <td>{element.type}</td>
                                        <td>{element.bal}</td>
                                        <td>
                                            {/* <button className="edit" onClick={() => handleEdit(index)}>Edit</button> */}
                                            <button className="delete" onClick={() => handleDelete(element.id)}>Delete</button>
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