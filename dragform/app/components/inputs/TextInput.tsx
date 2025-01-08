import React from 'react';

const TextInput: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  return <input type="text" placeholder={placeholder} className="border p-2 w-full" />;
};

export default TextInput;