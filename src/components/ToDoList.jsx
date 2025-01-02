import React from 'react'
import ToDoCard from './ToDoCard'

export default function ToDoList(props) {
    let { todos } = props
    return (
        <div>
            <ul className='main'>
                {todos.map((todo, index) => {
                    return <ToDoCard {...props} key={index} index={index}>
                        <p>{todo}</p>
                    </ToDoCard>
                })}
            </ul>
        </div>
    )
}
