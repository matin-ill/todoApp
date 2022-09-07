import React  from "react";
import { useState } from "react";

function FormAddTodo(props) {
    
    const [text , setText] = useState('')
    let formHandler = e => {
        e.preventDefault()
        props.add(text)
        setText('')
    }
    let inputHandler = e => setText(e.target.value)
        return(
            <form onSubmit={formHandler} className="form-inline">
            <div className="form-group">
                <input value={text} onChange={inputHandler} className="  mx-sm3" placeholder="i want to do ...."/>
                <button  className="btn btn-primary">add</button>
            </div>
        </form>
        )
}

export default FormAddTodo