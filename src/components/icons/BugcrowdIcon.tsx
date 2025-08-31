import React from 'react';

interface BugcrowdIconProps {
  size?: number;
  className?: string;
}

const BugcrowdIcon: React.FC<BugcrowdIconProps> = ({ size = 24, className = "" }) => {
  return (
    <div 
      className={`${className} rounded-full bg-orange-500 flex items-center justify-center`}
      style={{ width: size, height: size }}
    >
      <span 
        className="text-white font-bold"
        style={{ fontSize: size * 0.35 }}
      >
        BC
      </span>
    </div>
  );
};

export default BugcrowdIcon;
