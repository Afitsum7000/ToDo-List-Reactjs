import { useState, useEffect } from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {

  const [todos, setTodos] = useState([])
  const [todovalue, setTodoValue] = useState('');

  function persistdata(newlist) {
    localStorage.setItem('todos', JSON.stringify(newlist));
  }

  function handleaddTodo(newtodos) {
    const newtodolist = [...todos, newtodos];
    setTodos(newtodolist)
    persistdata(newtodolist)
  }

  function handledeletetodo(index) {
    const newtodolist = todos.filter((todo, i) => {
      return i !== index
    })
    persistdata(newtodolist)
    setTodos(newtodolist);
  }
  useEffect(() => {
    if (!localStorage) {
      return
    }
    const todolist = localStorage.getItem('todos');
    if (!todolist) {
      return
    }
    setTodos(JSON.parse(
      todolist
    ))
  }, [])

  function handleedittodo(index) {
    const editedtodovalue = todos[index];
    setTodoValue(editedtodovalue);
    handledeletetodo(index);
    // const newtodolist = todos.map((todo, i) => {
    //   if (i == index) {
    //     return { ...todo, index: updatevalue }
    //   } else {
    //     return todo
    //   }
    // })
  }

  return (
    <>
      <ToDoInput handleaddTodo={handleaddTodo} todovalue={todovalue} setTodoValue={setTodoValue} />
      <ToDoList todos={todos} handledeletetodo={handledeletetodo} handleedittodo={handleedittodo} />
    </>
  )
}

export default App
