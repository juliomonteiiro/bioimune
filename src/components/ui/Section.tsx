import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
}

const Section = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '',
  bgColor = 'bg-white'
}: SectionProps) => {
  return (
    <section id={id} className={`py-20 ${bgColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {subtitle && <span className="text-teal-600 font-medium">{subtitle}</span>}
            {title && <h2 className="text-3xl font-bold mt-2">{title}</h2>}
            <div className="w-24 h-1 bg-teal-600 mx-auto mt-4"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
