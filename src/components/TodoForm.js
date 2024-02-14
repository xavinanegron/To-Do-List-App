import React, { useState } from 'react';

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault(); {/* This prevents the default page refresh when you submit a form */}

    addTodo(value)

    setValue(''); {/* This clears the input when the Add Task button is clicked */}
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input 
        type='text' 
        className='todo-input'
        value={value}
        placeholder="What's on today's list?"
        onChange={(e) => setValue(e.target.value)} />

        <button 
          type='submit' 
          className='todo-btn'>
            Add Task
          </button>
      
    </form>
  )
}

export default TodoForm