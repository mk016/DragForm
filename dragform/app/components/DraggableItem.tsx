import React, { useRef } from 'react';
import { useDrag } from 'react-dnd';

interface DraggableItemProps {
  id: string;
  type: string;
  position?: { x: number; y: number };
}

const DraggableItem: React.FC<DraggableItemProps> = ({ id, type, position }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drag] = useDrag({
    type: 'BOX',
    item: { id, type },
  });

  // Attach the drag ref to the DOM element
  drag(ref);

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        top: position?.y || 0,
        left: position?.x || 0,
        border: '1px solid blue',
        padding: '8px',
        cursor: 'move',
      }}
    >
      {type}
    </div>
  );
};

export default DraggableItem;
