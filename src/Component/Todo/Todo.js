import React from "react";
import { useState } from "react";
import EditTodo from "./EditTodo";

function Todo(props) {

    const {item} = props

    const [edit , setEdit] = useState(false)

    let editHandler = text => {
        props.edit(item.key , text)
        setEdit(false)
    }
    return (
        <>
            {
               ! edit
                ? (
                    <div className="col-6 mb-2">
                    <div className="d-flex justify-content-between align-items-center border rounded p-3">
                        <div>
                            {props.item.text}
                        </div>
                        <div>
                            <button type="button" className={`btn btn-sm ${!item.done ? "btn-success" : "btn-warning"}`}  onClick={() => props.done(item.key)} >{item.done ? "undone" : "done"}</button>
                            <button type="button" className="btn btn-info btn-sm " onClick={() => setEdit(true)}>edit</button>
                            <button type="button" className="btn btn-danger btn-sm ml-1" onClick={() => props.delete(item.key)}>delete</button>
                        </div>
                    </div>
                </div>
                )
                : <EditTodo text = {item.text} edit = {editHandler} />
            }
        </>
    )
}

export default Todo