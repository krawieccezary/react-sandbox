import React, { ChangeEvent, FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { addTask, removeAllTasks } from '../slices/todoSlices';
import Task, { TaskProps } from '../components/TodoApp/Task';
import Button from '../components/Button';


const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const listContainerVariants = {
  hidden: {
    opacity: 0, 
    y: -10
  },
  show: {
    opacity: 1, 
    y: 0, 
    transition: { 
      staggerChildren: .1,
      duration: .2
    }
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

  const handleRemoveAllTasks = () => dispatch(removeAllTasks());

  const tasksList = state.tasks.map((task: TaskProps) => <Task key={task.id} {...task} />)

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="w-full max-w-2xl"
    >
      <h1 className="section-header">Todo App</h1> 
      <form onSubmit={handleSubmit} className="flex items-end">
        <input className="text-black mt-5 mr-2 p-2 rounded grow" type="text" value={task} onChange={handleInput}/>
        <Button extraStyles="bg-blue-500 hover:bg-blue-600" type="submit">Add task</Button>
      </form>
      <motion.ul
        variants={listContainerVariants}
        initial="hidden"
        animate="show"
      >
        {tasksList}
      {tasksList.length ? <Button type="button" click={handleRemoveAllTasks} extraStyles="bg-red-700 hover:bg-red-800 my-4 mx-auto block">Remove All</Button> : null}
      </motion.ul>
    </motion.div>
  )
}

export default TodoApp;