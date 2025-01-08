import React from 'react';

const Select: React.FC<{ options: string[] }> = ({ options }) => {
  return (
    <select>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
