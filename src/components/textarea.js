import React from 'react';

export const Textarea = ({ placeholder, rows = 4, ...props }) => {
  return (
    <textarea
      className="w-full border border-gray-300 rounded-md px-3 py-2"
      placeholder={placeholder}
      rows={rows}
      {...props}
    />
  );
};