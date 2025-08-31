import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ChevronDown } from 'lucide-react';
import HackerOneIcon from './icons/HackerOneIcon';
import BugcrowdIcon from './icons/BugcrowdIcon';

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/tharindushakya', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/tharindu-shakya-93775318b/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/wtshakya', label: 'Twitter' },
    { icon: HackerOneIcon, href: 'https://hackerone.com/bcmrspam', label: 'HackerOne' },
    { icon: BugcrowdIcon, href: 'https://bugcrowd.com/h/Mrspam', label: 'Bugcrowd' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-green/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-primary-900">Hi, I'm </span>
              <span className="gradient-text">Tharindu Shakya</span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl lg:text-3xl text-primary-600 mb-4 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Cybersecurity Researcher | Bug Hunter | Security Analyst
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl text-primary-500 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Passionate about securing digital infrastructures and hunting vulnerabilities. 
              Turning security challenges into opportunities for stronger defenses.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex justify-center space-x-6 mb-12"
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
                  className="p-4 bg-primary-100/10 backdrop-blur-sm rounded-full border border-primary-300/20 hover:border-cyber-green/50 transition-all duration-300 cyber-glow"
                  title={social.label}
                >
                  <social.icon size={20} className="text-primary-600  hover:text-cyber-green transition-colors" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-32"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyber-green to-cyber-blue text-primary-50 font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-primary-50 font-semibold rounded-lg transition-all duration-300"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - positioned relative to screen */}
      <motion.div
        className="absolute bottom-8 right-8 transform z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.a
          href="#skills"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer block"
        >
          <ChevronDown size={32} className="text-primary-500 hover:text-cyber-green transition-colors" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
