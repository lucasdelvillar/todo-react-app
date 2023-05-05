import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)
    const handleSubmit = e => {
        e.preventDefault(); // prevents reload
        
        editTodo(value, task.id) // defined function to add value 

        setValue("") // resets form input bar to ""
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value}
        placeholder='Update task' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Update task</button>
    </form>
  )
}
