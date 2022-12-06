import React, { useEffect, useState } from "react"

function EditList(props) {
    const [updateState, setUpdateState] = useState({
        amount: '',
        notes: '',
        type: ''
    });
    useEffect(() => {
        setUpdateState({
        amount: props.current.amount,
            notes: props.current.notes,
            type: props.current.type
        })
    }, [props])
    return (
        <tr>
            <td><input type="number" value={updateState.id}
                onChange={e => setUpdateState({ ...updateState, amount: e.target.value })} /></td>
            <td><input type="text" value={updateState.name}
                onChange={e => setUpdateState({ ...updateState, notes: e.target.value })} /></td>
            <td><input type="text" value={updateState.age}
                onChange={e => setUpdateState({ ...updateState, type: e.target.value })} /></td>
            <td><button type="submit" onClick={() => props.update(updateState)}>Update</button></td>
        </tr>
    )
}
export default EditList