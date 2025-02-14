import React from 'react';

interface GridProps {
  children: React.ReactNode;
  cols?: number;
  gap?: number;
  className?: string;
}

const Grid = ({ 
  children, 
  cols = 1, 
  gap = 8,
  className = '' 
}: GridProps) => {
  return (
    <div 
      className={`
        grid grid-cols-1 
        ${cols > 1 ? `md:grid-cols-${cols}` : ''} 
        gap-${gap} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Grid;