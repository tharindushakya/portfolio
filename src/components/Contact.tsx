import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter, 
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import HackerOneIcon from './icons/HackerOneIcon';
import BugcrowdIcon from './icons/BugcrowdIcon';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: React.ComponentType<any>;
  label: string;
  value: string;
  href?: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      label: 'Email',
      value: 'wtshakya@gmail.com',
      href: 'mailto:wtshakya@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 76 9325 014',
      href: 'tel:+94769325014'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Colombo, Sri Lanka'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/tharindushakya',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/tharindu-shakya-93775318b/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://x.com/wtshakya',
      color: 'hover:text-blue-400'
    },
    {
      icon: HackerOneIcon,
      label: 'HackerOne',
      href: 'https://hackerone.com/bcmrspam',
      color: 'hover:text-cyber-green'
    },
    {
      icon: BugcrowdIcon,
      label: 'Bugcrowd',
      href: 'https://bugcrowd.com/h/Mrspam',
      color: 'hover:text-cyber-blue'
    }
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission - replace with actual form handling
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend or email service
      console.log('Form data:', data);
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <section id="contact" className="py-20 relative layered z-background defer-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-content">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 z-content"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 z-text">
            <span className="gradient-text z-text">Let's Work Together</span>
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto z-text">
            Ready to strengthen your security posture? Let's discuss how I can help 
            protect your organization from cyber threats.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 z-content">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 z-content"
          >
            <div className="z-content">
              <h3 className="text-2xl font-bold text-primary-800 mb-6 z-text">Get In Touch</h3>
              <p className="text-primary-600 mb-8 leading-relaxed z-text">
                I'm always interested in discussing new opportunities, challenging projects, 
                and collaborations in cybersecurity. Whether you need a security assessment, 
                penetration testing, or ongoing security consultation, I'm here to help.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 z-content">
              {contactInfo.map((contact) => (
                <motion.div
                  key={contact.label}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 z-content"
                >
                  <div className="p-3 bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 rounded-lg z-content">
                    <contact.icon size={20} className="text-cyber-green rounded-full z-text" />
                  </div>
                  <div className="z-content">
                    <div className="text-sm text-primary-500 uppercase tracking-wide z-text">{contact.label}</div>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-primary-700 hover:text-cyber-green transition-colors font-medium z-text"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <div className="text-primary-700 font-medium z-text">{contact.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="z-content">
              <h4 className="text-lg font-semibold text-primary-800 mb-4 z-text">Connect With Me</h4>
              <div className="flex space-x-4 z-content">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-primary-100/10 backdrop-blur-sm rounded-full border border-primary-300/20 hover:border-cyber-green/50 transition-all duration-300 z-content ${social.color}`}
                    title={social.label}
                  >
                    <social.icon size={20} className="z-text" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-primary-100/5 backdrop-blur-sm rounded-xl p-6 border border-primary-300/20 z-content">
              <h4 className="text-lg font-semibold text-primary-800 mb-2 z-text">Current Availability</h4>
              <div className="flex items-center space-x-2 mb-2 z-content">
                <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse z-content"></div>
                <span className="text-primary-700 font-medium z-text">Available for new projects</span>
              </div>
              <p className="text-sm text-primary-600 z-text">
                I typically respond to inquiries within 24 hours. For urgent security matters, 
                please mention "URGENT" in your subject line.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary-100/5 backdrop-blur-sm rounded-xl p-8 border border-primary-300/20 z-content"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 z-content">
              {/* Name Field */}
              <div className="z-content">
                <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-2 z-text">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 bg-primary-50/50 border border-primary-300/30 rounded-lg focus:ring-2 focus:ring-cyber-green focus:border-cyber-green transition-all duration-200 text-primary-800 z-content"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400 z-text">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="z-content">
                <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2 z-text">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full px-4 py-3 bg-primary-50/50 border border-primary-300/30 rounded-lg focus:ring-2 focus:ring-cyber-green focus:border-cyber-green transition-all duration-200 text-primary-800 z-content"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400 z-text">{errors.email.message}</p>
                )}
              </div>

              {/* Subject Field */}
              <div className="z-content">
                <label htmlFor="subject" className="block text-sm font-medium text-primary-700 mb-2 z-text">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject', { required: 'Subject is required' })}
                  className="w-full px-4 py-3 bg-primary-50/50 border border-primary-300/30 rounded-lg focus:ring-2 focus:ring-cyber-green focus:border-cyber-green transition-all duration-200 text-primary-800 z-content"
                  placeholder="Security Consultation"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-400 z-text">{errors.subject.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="z-content">
                <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-2 z-text">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 bg-primary-50/50 border border-primary-300/30 rounded-lg focus:ring-2 focus:ring-cyber-green focus:border-cyber-green transition-all duration-200 text-primary-800 resize-none z-content"
                  placeholder="Tell me about your project or security needs..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400 z-text">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full px-8 py-3 bg-gradient-to-r from-cyber-green to-cyber-blue text-primary-50 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 z-content ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-50/30 border-t-primary-50 rounded-full animate-spin z-text"></div>
                    <span className="z-text">Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} className="z-text" />
                    <span className="z-text">Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-cyber-green z-content"
                >
                  <CheckCircle size={18} className="z-text" />
                  <span className="z-text">Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-red-400 z-content"
                >
                  <AlertCircle size={18} className="z-text" />
                  <span className="z-text">Failed to send message. Please try again or contact me directly.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
