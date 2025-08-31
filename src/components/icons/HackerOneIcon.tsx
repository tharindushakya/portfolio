import React from 'react';

interface HackerOneIconProps {
  size?: number;
  className?: string;
}

const HackerOneIcon: React.FC<HackerOneIconProps> = ({ size = 24, className = "" }) => {
  return (
    <div 
      className={`${className} rounded-full bg-black flex items-center justify-center overflow-hidden`}
      style={{ width: size, height: size }}
    >
      <img 
        src="/assets/h1_mark_white.png" 
        alt="HackerOne" 
        width={size * 0.7} 
        height={size * 0.7}
        className="object-contain"
      />
    </div>
  );
};

export default HackerOneIcon;
