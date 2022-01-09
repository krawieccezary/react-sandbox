import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './routes/Home';
import TodoApp from './routes/TodoApp';
import WeatherApp from './routes/WeatherApp';

function App() {
  return (
    <div className="App">
      <header className="flex justify-center p-5">
        <Nav />
      </header>
      <main className="flex justify-center text-white pt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="todo-app" element={<TodoApp />} />
          <Route path="weather-app" element={<WeatherApp />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
