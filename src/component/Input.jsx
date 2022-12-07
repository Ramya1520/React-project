import React, { useState, useRef } from "react"
// import Submit from "./Submit"
import './StyleSheet.css'
import EditList from "./Update"
import InitialValue from './Initialvalue'
function Crud() {
    const [list, setList] = useState([])
    const [listVal, setListVal] = useState({
        id:'',
        amount: '',
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
            { ...li,id: updatedData.id,amount: updatedData.amount, notes: updatedData.notes, type: updatedData.type } : li))
        setList(newList)
        setUpdate(-1)
    }
    const handleUpdate = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <h1>Expense Tracker</h1>
            <p><InitialValue/></p>
          
            <form className="forms" onSubmit={valSubmit}>
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
                <button type="submit">Add</button>
            </form>
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


