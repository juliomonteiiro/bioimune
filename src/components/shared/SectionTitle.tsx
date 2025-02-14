import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true,
  className = '' 
}: SectionTitleProps) => {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 ${className}`}>
      {subtitle && <span className="text-teal-600 font-medium">{subtitle}</span>}
      <h2 className="text-3xl font-bold mt-2">{title}</h2>
      <div className={`w-24 h-1 bg-teal-600 ${centered ? 'mx-auto' : ''} mt-4`}></div>
    </div>
  );
};

export default SectionTitle;
