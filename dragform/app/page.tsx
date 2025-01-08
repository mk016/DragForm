"use client";

import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Canvas from './components/Canvas';
import Sidebar from './components/Sidebar';

const Home: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen flex flex-col">
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
          <button onClick={toggleSidebar} className="text-2xl">
            &#9776;
          </button>
          <h1 className="text-xl">DragForm</h1>
        </header>
        <div className="flex flex-grow">
          {isSidebarOpen && <Sidebar />}
          <Canvas />
        </div>
      </div>
    </DndProvider>
  );
};

export default Home;