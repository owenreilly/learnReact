import React, { useState } from 'react'
//import { addTodo } from './TodoList'

export function NewTodoForm(props) {

    props.onSubmit()
    const [newItem, setNewItem] = useState("")


    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return
        addTodo(newItem)
        setNewItem("")
       }
    

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input value={newItem} 
                onChange={(e) => setNewItem(e.target.value)} 
                type="text" 
                id="item" 
                />
            </div>
            <button className="btn">Add</button>
        </form>
    )
}
