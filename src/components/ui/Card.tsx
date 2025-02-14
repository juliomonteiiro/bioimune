import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className = '', hover = true }: CardProps) => {
  return (
    <div 
      className={`
        bg-white rounded-2xl shadow-lg overflow-hidden
        ${hover ? 'transform transition-all duration-300 hover:shadow-xl hover:scale-105' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;