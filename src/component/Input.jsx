import React, { useState, useRef } from "react"
// import Submit from "./Submit"
import './StyleSheet.css'
import EditList from "./Update"
function Crud() {
    const [list, setList] = useState([])
    const [listVal, setListVal] = useState({
        id: '',
        name: '',
        age: ''
    })
    const [update, setUpdate] = useState(-1)
    const idRef = useRef()
    const nameRef = useRef()
    const ageRef = useRef()

    const valSubmit = (event) => {
        event.preventDefault();
        if (listVal.id && listVal.name && listVal.age) { setList([...list, listVal]) }
        idRef.current.value = ''
        nameRef.current.value = ''
        ageRef.current.value = ''
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
            { ...li, id: updatedData.id, name: updatedData.name, age: updatedData.age } : li))
        setList(newList)
        setUpdate(-1)
    }
    const handleUpdate = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <h1>Expense Tracker</h1>
            <p>Initial amount:<span>0</span></p>
            <form className="forms" onSubmit={valSubmit}>
                <label>Amount :</label>
                <input type="number" value={list.id}
                    onChange={e => setListVal({ ...listVal, id: e.target.value })} ref={idRef} />
                <label>Notes :</label>
                <input type="text" value={list.name}
                    onChange={e => setListVal({ ...listVal, name: e.target.value })} ref={nameRef} />
                <label>Type :</label>
                <input type="text" value={list.age}
                    onChange={e => setListVal({ ...listVal, age: e.target.value })} ref={ageRef} />
                <button type="submit">Add</button>
            </form>
            <div className="myTable">
                <form onClick={handleUpdate}>
                    <table >
                        <td>Amount</td>
                        <td>Notes</td>
                        <td>Type</td>
                        <td>Action</td>

                        {
                            list.map((element, index) => (
                                update === index ? <EditList current={element} update={updateData} /> :
                                    <tr key={index}>
                                        <td>{element.id}</td>
                                        <td>{element.name}</td>
                                        <td>{element.age}</td>
                                        <td>
                                            <button className="edit" onClick={() => handleEdit(index)}>Edit</button>
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


