import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
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

const itemVariants = {
  hidden: {
    opacity: 0, 
    y: -10
  },
  show: {
    opacity: 1,
    y: 0, 
  }
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

  const handleKeyPress = (e: KeyboardEvent): void => {
    const id = parseInt((e.target as HTMLInputElement).dataset.id!);
    if(e.charCode === 13) handleEditTask(id);
  }

  const handleInputName = (e: ChangeEvent<HTMLInputElement>) => setInputName(e.target.value);

  return (
    <motion.li  
      variants={itemVariants}
      transition={{ type: "spring", stiffness: 200 }}
      className="flex w-100 justify-between backdrop-blur-2xl bg-sky-800 rounded-md p-2 my-2 pl-4">
      {isEditedTask ? (
        <input className="bg-sky-900 text-white rounded-md px-2 -ml-2 grow mr-2" type="text" value={inputName} onChange={handleInputName} data-id={id} onKeyPress={handleKeyPress}/>
      ) : (
        <span>{name}</span>
      )}
      <div>
        <button className="mx-1" onClick={() => handleCheckTask(id)}><AiOutlineCheckCircle></AiOutlineCheckCircle></button>
        <button className="mx-1" onClick={!isEditedTask ? handleEditingTask : () => handleEditTask(id)}><AiFillEdit></AiFillEdit></button>
        <button className="mx-1" onClick={() => handleRemoveClick(id)}><MdDelete></MdDelete></button>
      </div>
    </motion.li>
  )
}

export default Task;