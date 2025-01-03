'use client'

import React, { useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import DraggableItem from './DraggableItem';

const Canvas: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const canvasRef = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: 'BOX',
    drop: (item: any, monitor) => {
      const offset = monitor.getClientOffset();
      const canvasBounds = canvasRef.current?.getBoundingClientRect();

      if (offset && canvasBounds) {
        const x = offset.x - canvasBounds.left;
        const y = offset.y - canvasBounds.top;

        setItems((prev) => [
          ...prev,
          {
            id: item.id,
            type: item.type,
            position: { x, y },
          },
        ]);
      }
    },
  });

  // Attach the drop ref to the canvas DOM element
  drop(canvasRef);

  return (
    <div
      ref={canvasRef}
      style={{
        width: '100%',
        height: '80vh',
        border: '1px solid black',
        position: 'relative',
      }}
    >
      {items.map((item, index) => (
        <DraggableItem
          key={index}
          id={item.id}
          type={item.type}
          position={item.position}
        />
      ))}
    </div>
  );
};

export default Canvas;
