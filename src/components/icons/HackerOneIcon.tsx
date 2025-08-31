import React, { useMemo } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
// Import only mark variants per request
import markWhite from '../../assets/HackerOne-Logos/h1_mark_white.png';
import markBlack from '../../assets/HackerOne-Logos/h1_mark_black.png';

interface HackerOneIconProps {
  size?: number;
  className?: string;
  /** Force theme variant if needed (overrides context) */
  variant?: 'light' | 'dark';
}

const HackerOneIcon: React.FC<HackerOneIconProps> = ({ size = 24, className = '', variant }) => {
  const { theme: contextTheme } = useTheme();
  const theme = variant ?? contextTheme;

  const src = useMemo(() => (theme === 'light' ? markBlack : markWhite), [theme]);

  return (
    <div
      className={`${className} flex items-center justify-center overflow-hidden`}
      style={{ width: size, height: size }}
    >
      <img
        src={src}
  alt="HackerOne"
        width={size * 0.78}
        height={size * 0.78}
        className="object-contain transition-opacity duration-300"
        loading="lazy"
      />
    </div>
  );
};

export default HackerOneIcon;
