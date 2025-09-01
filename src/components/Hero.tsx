import React, { useState, useEffect } from 'react';
import { useBackgroundScrollEffect } from '../hooks/useBackgroundScrollEffect';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ChevronDown } from 'lucide-react';
import HackerOneIcon from './icons/HackerOneIcon';
import BugcrowdIcon from './icons/BugcrowdIcon';

// Laser Typing Animation Component
const LaserTyping: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (currentIndex <= text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, currentIndex * 30); // Much faster - 30ms per character

      return () => clearTimeout(timer);
    } else {
      // Typing is complete, start cursor blinking after a delay
      setTimeout(() => {
        const blinkInterval = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 600);
        
        return () => clearInterval(blinkInterval);
      }, 500);
    }
  }, [isTyping, currentIndex, text]);

  return (
    <span className="relative">
      <span className="gradient-text">
        {displayedText.split('').map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.1,
              ease: "easeOut"
            }}
            style={{ 
              textShadow: index === displayedText.length - 1 ? 
                '0 0 10px var(--cyber-green), 0 0 20px var(--cyber-green)' : 
                'none'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </span>
      <motion.span
        className="laser-cursor"
        animate={{ 
          opacity: showCursor ? 1 : 0,
          scale: showCursor ? 1 : 0.8 
        }}
        transition={{ duration: 0.1 }}
      >
        _
      </motion.span>
    </span>
  );
};

const Hero: React.FC = () => {
  // Activate background blur/zoom effect once component mounts
  useBackgroundScrollEffect({ maxBlur: 14, maxScale: 1.08, start: 0.15, end: 0.65 });
  const socialLinks = [
    { icon: Github, href: 'https://github.com/tharindushakya', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/tharindu-shakya-93775318b/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/wtshakya', label: 'Twitter' },
    { icon: HackerOneIcon, href: 'https://hackerone.com/bcmrspam', label: 'HackerOne' },
    { icon: BugcrowdIcon, href: 'https://bugcrowd.com/h/Mrspam', label: 'Bugcrowd' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden layered z-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-patterns">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-green/10 rounded-full blur-3xl animate-pulse-slow z-patterns"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse-slow delay-1000 z-patterns"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-content">
        <div className="text-center z-content">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-content"
          >
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 z-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-primary-900 z-text">Hi, I'm </span>
              <LaserTyping text="Tharindu Shakya" delay={800} />
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl lg:text-3xl text-primary-600 mb-4 font-medium z-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Cybersecurity Researcher | Bug Hunter | Security Analyst
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl text-primary-500 mb-8 max-w-3xl mx-auto leading-relaxed z-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Passionate about securing digital infrastructures and hunting vulnerabilities. 
              Turning security challenges into opportunities for stronger defenses.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center space-x-6 mb-12 z-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full leading-none transition-all duration-300 hover:shadow-[0_0_12px_rgba(0,255,65,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-green/60 z-content"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5 text-primary-600 hover:text-cyber-green transition-colors z-text" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-32 z-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyber-green to-cyber-blue text-primary-50 font-semibold rounded-lg hover:shadow-lg transition-all duration-300 z-content"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-primary-50 font-semibold rounded-lg transition-all duration-300 z-content"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - positioned relative to screen */}
      <motion.div
        className="absolute bottom-8 right-8 transform z-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.a
          href="#skills"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer block z-text"
        >
          <ChevronDown size={32} className="text-primary-500 hover:text-cyber-green transition-colors z-text" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
