import React from 'react';

const Checkbox: React.FC<{ label: string }> = ({ label }) => {
  return (
    <label className="flex items-center">
      <input type="checkbox" className="mr-2" />
      {label}
    </label>
  );
};

export default Checkbox;