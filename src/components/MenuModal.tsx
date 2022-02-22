import React, { FunctionComponent } from 'react';
import { motion, AnimatePresence } from "framer-motion"

import Nav from './Nav';

type MenuModalProps = {
  isOpen: boolean,
  setIsOpen: Function,
}

const MenuModal: FunctionComponent<MenuModalProps> = ({ isOpen, setIsOpen }) => {

  return (
    <AnimatePresence exitBeforeEnter>
      {isOpen && <motion.div 
        className="flex bg-blue-900 h-screen w-2/5 justify-start items-center py-5 fixed top-0 right-0 px-32 pl-20 z-10"
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ duration: .3 }}
        aria-label="ModalMenu"
      >
        <Nav {...{isOpen, setIsOpen}} />
      </motion.div>}
    </AnimatePresence>
  )
}


export default MenuModal;