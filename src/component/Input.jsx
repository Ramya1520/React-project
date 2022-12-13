import React, { useState, useRef, useEffect } from "react"
// import Submit from "./Submit"
import './StyleSheet.css'
import EditList from "./Update"
function Crud() {
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
    const idRef = useRef()
    const amountRef = useRef()
    const notesRef = useRef()
    const typeRef = useRef()
    console.log("list", list)
    console.log("list val:", listVal)
    useEffect(() => {
        setListVal({ ...listVal, bal: val })
    }, [val])
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
    }
    function debit() {
        var balance = parseInt(val) - parseInt(current_amount);
        setVal(balance);
    }
    const valSubmit = (event) => {
        event.preventDefault();
        if (listVal.id && listVal.amount && listVal.notes && listVal.type && listVal.bal) { setList([...list, listVal]) }
        idRef.current.value = ''
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