import React from 'react';

interface FlexProps {
  children: React.ReactNode;
  direction?: 'row' | 'col';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  align?: 'start' | 'end' | 'center' | 'stretch';
  gap?: number;
  className?: string;
}

const Flex = ({ 
  children, 
  direction = 'row',
  justify = 'start',
  align = 'start',
  gap = 4,
  className = ''
}: FlexProps) => {
  return (
    <div 
      className={`
        flex 
        ${direction === 'col' ? 'flex-col' : 'flex-row'}
        justify-${justify}
        items-${align}
        gap-${gap}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Flex;