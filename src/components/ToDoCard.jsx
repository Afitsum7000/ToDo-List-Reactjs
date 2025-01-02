import React from 'react'

export default function ToDoCard(props) {
    const { children, handledeletetodo, index, handleedittodo } = props
    return (
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button onClick={() => {
                    handleedittodo(index)
                }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => {
                    handledeletetodo(index)
                }}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </li >
    )
}
