import React from 'react';
import { useDrop } from 'react-dnd';

const Canvas: React.FC = () => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'component',
    drop: (item, monitor) => {
      console.log('Dropped item:', item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className={`flex-grow p-4 ${isOver ? 'border-2 border-green-500' : 'border-2 border-black'}`}>
      Drop components here
    </div>
  );
};

export default Canvas;