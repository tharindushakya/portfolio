import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ArrowUp,
  Heart
} from 'lucide-react';
import HackerOneIcon from './icons/HackerOneIcon';
import BugcrowdIcon from './icons/BugcrowdIcon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/tharindushakya', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/tharindu-shakya-93775318b/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/wtshakya', label: 'Twitter' },
    { icon: HackerOneIcon, href: 'https://hackerone.com/bcmrspam', label: 'HackerOne' },
    { icon: BugcrowdIcon, href: 'https://bugcrowd.com/h/Mrspam', label: 'Bugcrowd' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-primary-50/95 backdrop-blur-sm border-t border-primary-300/20 layered z-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-patterns">
        <div className="absolute top-0 left-0 w-full h-full z-patterns">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyber-green rounded-full animate-pulse z-patterns"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-content">
        <div className="py-12 z-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 z-content">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 z-content"
            >
              <div className="flex items-center space-x-2 mb-4 z-content">
                <Shield className="h-8 w-8 text-cyber-green z-text" />
                <span className="text-2xl font-bold gradient-text z-text">TharinduShakya</span>
              </div>
              <p className="text-primary-600 mb-6 max-w-md leading-relaxed z-text">
                Dedicated to strengthening cybersecurity defenses through ethical hacking, 
                vulnerability research, and security consulting. Building a safer digital world, 
                one vulnerability at a time.
              </p>
              <div className="flex items-center space-x-2 text-sm text-primary-500 z-content">
                <Mail size={16} className="z-text" />
                <a 
                  href="mailto:wtshakya@gmail.com"
                  className="hover:text-cyber-green transition-colors z-text"
                >
                  wtshakya@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="z-content"
            >
              <h3 className="text-lg font-semibold text-primary-800 mb-4 z-text">Quick Links</h3>
              <ul className="space-y-2 z-content">
                {quickLinks.map((link) => (
                  <li key={link.label} className="z-content">
                    <a
                      href={link.href}
                      className="text-primary-600 hover:text-cyber-green transition-colors text-sm z-text"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="z-content"
            >
              <h3 className="text-lg font-semibold text-primary-800 mb-4 z-text">Connect</h3>
              <div className="space-y-3 z-content">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-primary-600 hover:text-cyber-green transition-colors text-sm z-content"
                  >
                    <social.icon size={16} className="rounded-full z-text" />
                    <span className="z-text">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-300/20 py-6 z-content">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 z-content">
            {/* Left side - Copyright and Additional Info */}
            <div className="flex flex-col space-y-2 z-content">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm text-primary-500 z-text"
              >
                <p className="flex items-center flex-wrap gap-1 z-text">
                  <span className="z-text">© {currentYear} Tharindu Shakya. Made with&nbsp;</span>
                  <Heart size={14} className="text-red-400 fill-current z-text" />
                  <span className="z-text">&nbsp;and lots of coffee.</span>
                </p>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6 text-sm text-primary-500 z-text"
              >
                <span className="z-text">All vulnerabilities responsibly disclosed</span>
              </motion.div>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-primary-100/10 backdrop-blur-sm rounded-full border border-primary-300/20 hover:border-cyber-green/50 transition-all duration-300 z-content"
              title="Back to top"
            >
              <ArrowUp size={16} className="text-primary-600 hover:text-cyber-green z-text" />
            </motion.button>
          </div>
        </div>

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center py-4 border-t border-primary-300/10 z-content"
        >
          <p className="text-xs text-primary-500 z-text">
            🔒 This website follows security best practices. 
            If you find any vulnerabilities, please contact me responsibly.
          </p>
        </motion.div>
      </div>

      {/* Animated Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-cyber-green to-transparent opacity-30 z-patterns"></div>
    </footer>
  );
};

export default Footer;
