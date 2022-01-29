import React, { useState, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { MdDelete } from 'react-icons/md';
import { AiOutlineCheckCircle, AiFillEdit } from 'react-icons/ai';
import { useAppDispatch } from '../../hooks/hooks';
import { removeTask, checkTask, editTask } from '../../slices/todoSlices';

export type TaskProps = {
  id: number,
  name: string,
  completed?: boolean,
}

const Task = ({ id, name, completed }: TaskProps) => {
  const dispatch = useAppDispatch();
  const [isEditedTask, setIsEditedTask] = useState(false);
  const [inputName, setInputName] = useState(name);

  const handleRemoveClick = (id: number) => dispatch(removeTask(id));

  const handleCheckTask = (id: number) => dispatch(checkTask(id));

  const handleEditTask = (id: number) => {
    dispatch(editTask({id: id, name: inputName}));
    setIsEditedTask(false);
  };

  const handleEditingTask = () => setIsEditedTask(true);

  const handleInputName = (e: ChangeEvent<HTMLInputElement>) => setInputName(e.target.value);

  return (
    <motion.li  
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0, }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex w-100 justify-between backdrop-blur-2xl bg-sky-800 rounded-md p-2 my-1">
      {isEditedTask ? (
        <input className="bg-sky-900 text-white rounded-md px-2" type="text" value={inputName} onChange={handleInputName}/>
      ) : (
        <span>{name}</span>
      )}
      {completed && 'completed'}
      <div>
        <button className="mx-1" onClick={() => handleCheckTask(id)}><AiOutlineCheckCircle></AiOutlineCheckCircle></button>
        <button className="mx-1" onClick={!isEditedTask ? handleEditingTask : () => handleEditTask(id)}><AiFillEdit></AiFillEdit></button>
        <button className="mx-1" onClick={() => handleRemoveClick(id)}><MdDelete></MdDelete></button>
      </div>
    </motion.li>
  )
}

export default Task;