import React, { useState } from 'react';

const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task)

  const handleSubmit = e => {
    e.preventDefault(); {/* This prevents the default page refresh when you submit a form */}

    editTodo(value, task.id);

    setValue(''); {/* This clears the input when the Add Task button is clicked */}
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input 
        type='text' 
        className='todo-input'
        value={value}
        placeholder='Update Task'
        onChange={(e) => setValue(e.target.value)} />

        <button 
          type='submit' 
          className='todo-btn'>
            Update Task
          </button>
      
    </form>
  )
}

export default EditTodoForm