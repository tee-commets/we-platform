import React from 'react';

export const Input = ({ placeholder, ...props }) => {
  return (
    <input
      className="w-full border border-gray-300 rounded-md px-3 py-2"
      placeholder={placeholder}
      {...props}
    />
  );
};