import React, { useState } from 'react'

export default function ToDoInput(props) {
    const { handleaddTodo, todovalue, setTodoValue } = props;


    function handlechange(event) {
        setTodoValue(event.target.value);
    }
    return (
        <header>
            <input type="text" value={todovalue} placeholder='Enter a todo...' onChange={handlechange} />
            <button onClick={() => {
                handleaddTodo(todovalue);
                setTodoValue('');
            }}>Add</button>
        </header>
    )
}
