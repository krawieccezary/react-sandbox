import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import MenuModal from './components/MenuModal';
import MenuBurger from './components/MenuBurger';
import Home from './routes/Home';
import TodoApp from './routes/TodoApp';
import WeatherApp from './routes/WeatherApp';

function App() {
  const [isOpen, setIsOpen] = useState<true | false>(false);
  const location = useLocation();

  return (
    <div className="App">
      <MenuBurger setIsOpen={setIsOpen} isOpen={isOpen} />
      <MenuModal isOpen={isOpen} setIsOpen={setIsOpen}/>
      <main className="flex justify-center text-white w-3/4 mx-auto pt-20">
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} />
            <Route path="todo-app" element={<TodoApp />} />
            <Route path="weather-app" element={<WeatherApp />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
