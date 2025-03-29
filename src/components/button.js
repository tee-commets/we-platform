import React from 'react';

export const Button = ({ children, variant = 'default', size = 'medium', ...props }) => {
  const buttonStyles = {
    default: 'bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600',
    outline: 'border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-100',
  };

  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${buttonStyles[variant]} ${sizeStyles[size]}`}
      {...props}
    >
      {children}
    </button>
  );
};