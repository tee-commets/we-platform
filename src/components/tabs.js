import React from 'react';

export const Tabs = ({ children, defaultValue, ...props }) => {
  return (
    <div className="space-y-4" {...props}>
      {children}
    </div>
  );
};

export const TabsList = ({ children, ...props }) => {
  return (
    <div className="flex space-x-4" {...props}>
      {children}
    </div>
  );
};

export const TabsTrigger = ({ value, children, ...props }) => {
 