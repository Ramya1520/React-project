import React, { useEffect, useState } from "react"

function EditList(props) {
    const [updateState, setUpdateState] = useState({
        id:'',
        amount: '',
        notes: '',
        type: ''
    });
    useEffect(() => {
        setUpdateState({
            id:props.current.id,
            amount: props.current.amount,
            notes: props.current.notes,
            type: props.current.type
        })
    }, [props])
    return (
         
        <tr>
            <td><input type="id" value={updateState.id}
                onChange={e => setUpdateState({ ...updateState, id: e.target.value })} /></td>
            <td><input type="number" value={updateState.amount}
                onChange={e => setUpdateState({ ...updateState, amount: e.target.value })} /></td>
            <td><input type="text" value={updateState.notes}
                onChange={e => setUpdateState({ ...updateState, notes: e.target.value })} /></td>
            <td><input type="text" value={updateState.type}
                onChange={e => setUpdateState({ ...updateState, type: e.target.value })} /></td>
            <td><button type="submit" onClick={() => props.update(updateState)}>Update</button></td>
        </tr>
    )
}
export default EditList