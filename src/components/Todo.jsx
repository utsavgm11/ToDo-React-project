import React, { useEffect, useRef, useState } from 'react'
import ToDo_icon from '../assets/ToDo_icon.png'
import Todoitems from './Todoitems'

const Todo = () => {
  const [todoList, setTodolist] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")): []);
  const inputRef = useRef()

  // Add Task
  const add = () => {
    const inputText = inputRef.current.value.trim()
    if (inputText === '') return

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    }

    setTodolist((prev) => [...prev, newTodo])
    inputRef.current.value = ''
  }

  // Delete Task
  const deleteTodo = (id) => {
    setTodolist((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }
  const toggle = (id) =>{
    setTodolist((prevTodos)=>{
        return prevTodos.map((todo)=>{
            if(todo.id === id){
                return{...todo, isComplete: !todo.isComplete}
            }
            return todo;
        })
    })
  }
  
   useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoList))
   },[todoList])
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

      {/* Title */}
      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src={ToDo_icon} alt="ToDo Icon" />
        <h1 className='text-3xl font-semibold'>To-Do-List</h1>
      </div>

      {/* Input Section */}
      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input
          ref={inputRef}
          className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'
          type="text"
          placeholder='Add Your Task'
        />
        <button
          onClick={add}
          className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'
        >
          ADD +
        </button>
      </div>

      {/* Todo Items List */}
      <div>
        {todoList.map((item) => (
          <Todoitems
            key={item.id}
            id={item.id}
            text={item.text}
            iscomplete={item.isComplete}
            deleteTodo={deleteTodo} toggle={toggle}
          />
        ))}
      </div>
    </div>
  )
}

export default Todo
