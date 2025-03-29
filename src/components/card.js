import React from 'react';

export const Card = ({ children, ...props }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4" {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, ...props }) => {
  return (
    <div className="flex items-center justify-between mb-4" {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, ...props }) => {
  return <h2 className="text-lg font-bold" {...props}>{children}</h2>;
};

export const CardDescription = ({ children, ...props }) => {
  return <p className="text-sm text-muted-foreground" {...props}>{children}</p>;
};

export const CardContent = ({ children, ...props }) => {
  return <div className="space-y-4" {...props}>{children}</div>;
};