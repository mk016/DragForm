import React from 'react';
import { useDrag } from 'react-dnd';
import TextInput from './inputs/TextInput';
import Checkbox from './inputs/Checkbox';
import Select from './inputs/Select';

const Sidebar: React.FC = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'component',
    item: { type: 'component' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className="w-64 bg-gray-200 p-4 shadow-lg">
      <h3 className="text-lg font-bold mb-4">Components</h3>
      <div className="mb-4">
        <h4 className="font-semibold">Inputs</h4>
        <div ref={drag} className="mb-2" style={{ opacity: isDragging ? 0.5 : 1 }}>
          <TextInput placeholder="Sample Text Input" />
        </div>
        <div ref={drag} className="mb-2" style={{ opacity: isDragging ? 0.5 : 1 }}>
          <Checkbox label="Sample Checkbox" />
        </div>
        <div ref={drag} className="mb-2" style={{ opacity: isDragging ? 0.5 : 1 }}>
          <Select options={['Option 1', 'Option 2']} />
        </div>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold">Details</h4>
        <p className="text-sm">Drag and drop the components to the canvas area to build your form.</p>
      </div>
    </div>
  );
};

export default Sidebar;