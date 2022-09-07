import React from "react";
import Todo from "./Todo";
import { useState } from "react";

function TodoList (props) {
    const [statusDone , setDone] = useState(false)

    let {todos} = props

    let filterTodos = todos.filter(item => item.done === statusDone)
    return (
        <>
        <nav className="col-6 mb-3">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a href="/" className={`nav-item nav-link active font-weight-bold `}  onClick={() => setDone(false)} id="nav-home-tab" >undone <span className="badge badge-secondary">{todos.filter(item => item.done === false).length}</span></a>
                <a href="/" className={`nav-item nav-link active font-weight-bold `}  onClick={() => setDone(true)} id="nav-profile-tab">done <span className="badge badge-success">{todos.filter(item => item.done === true).length}</span></a>
            </div>
        </nav>     
    {
        filterTodos.length === 0
        ? <p>there isn't any todos</p>
        : filterTodos.map(item => 
                                <Todo item= {item}
                                key = {item.key}
                                delete ={props.delete}  
                                done= {props.done}
                                edit= {props.edit}
                                />)
}
</>
    )
    
}

export default TodoList