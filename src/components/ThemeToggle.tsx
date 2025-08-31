import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative p-3 rounded-full bg-primary-100/10 backdrop-blur-sm border border-primary-300/20 hover:border-cyber-green/50 transition-all duration-300 cyber-glow"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0.8
        }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 10 }}
        className="relative w-5 h-5"
      >
        {theme === 'dark' ? (
          <Moon 
            size={20} 
            className="text-cyber-blue absolute inset-0 transition-colors" 
          />
        ) : (
          <Sun 
            size={20} 
            className="text-cyber-green absolute inset-0 transition-colors" 
          />
        )}
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-full ${
          theme === 'dark' 
            ? 'bg-cyber-blue/20' 
            : 'bg-cyber-green/20'
        }`}
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
