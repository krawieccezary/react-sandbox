import React, { ChangeEvent, FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { addTask } from '../slices/todoSlices';
import Task, { TaskProps } from '../components/TodoApp/Task';


const containerVariants = {
  hidden: {
    opacity: 0, 
    y: '10%'
  },
  visible: {
    opacity: 1, 
    y: 0, 
    transition: { duration: 1}
  }
}

const TodoApp = () => {
  const [task, setTask] = useState('');
  const state = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => setTask(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if(task.length){
      dispatch(addTask({id: new Date().getTime(), name: task, completed: false}));
      setTask('');
    }
  };

  const tasksList = state.tasks.map((task: TaskProps) => <Task key={task.id} {...task} />)

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <h1 className="section-header">Todo App</h1> 
      <form onSubmit={handleSubmit} className="d-flex">
        <input className="text-black mt-5 mr-2 p-2 rounded" type="text" value={task} onChange={handleInput}/>
        <button className="bg-blue-500 hover:bg-blue-600 transition font-semibold py-2 px-5 rounded" type="submit">Add task</button>
      </form>
      <ul>{tasksList}</ul>
    </motion.div>
  )
}

export default TodoApp;