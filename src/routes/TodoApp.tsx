import React, { ChangeEvent, useState } from 'react';

const TodoApp = () => {
  const [task, setTask] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value);

  return (
    <div className="">
      <h1 className="section-header">Todo App</h1> 
      <form className="d-flex">
        <input className="text-black mt-5 mr-2 p-2 rounded" type="text" value={task} onChange={handleInput}/>
        <button className="bg-blue-500 hover:bg-blue-600 transition font-semibold py-2 px-5 rounded" type="submit">Add task</button>
      </form>
    </div>
  )
}

export default TodoApp;