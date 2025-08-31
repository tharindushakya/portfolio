import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Bug, 
  Network, 
  Lock, 
  Search, 
  Terminal, 
  Eye, 
  AlertTriangle,
  Server,
  Key
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ComponentType<any>;
  description: string;
  level: number;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      name: 'Penetration Testing',
      icon: Shield,
      description: 'Comprehensive security assessments and vulnerability testing',
      level: 50
    },
    {
      name: 'Bug Bounty Hunting',
      icon: Bug,
      description: 'Finding and reporting security vulnerabilities in web applications',
      level: 80
    },
    {
      name: 'Network Security',
      icon: Network,
      description: 'Securing network infrastructure and monitoring traffic',
      level: 50
    },
    {
      name: 'Web App Security',
      icon: Lock,
      description: 'OWASP Top 10, secure coding practices, and application testing',
      level: 80
    },
    {
      name: 'Threat Hunting',
      icon: Search,
      description: 'Proactive threat detection and incident response',
      level: 50
    },
    {
      name: 'Reverse Engineering',
      icon: Terminal,
      description: 'Malware analysis and binary exploitation techniques',
      level: 50
    },
    {
      name: 'Digital Forensics',
      icon: Eye,
      description: 'Evidence collection and analysis for security incidents',
      level: 50
    },
    {
      name: 'Vulnerability Assessment',
      icon: AlertTriangle,
      description: 'Systematic security scanning and risk assessment',
      level: 50
    },
    {
      name: 'Cloud Security',
      icon: Server,
      description: 'AWS, Azure, and GCP security configuration and monitoring',
      level: 30
    },
    {
      name: 'Cryptography',
      icon: Key,
      description: 'Encryption protocols, PKI, and cryptographic implementations',
      level: 50
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Security Expertise</span>
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Specialized skills in cybersecurity, developed through hands-on experience 
            and continuous learning in the ever-evolving threat landscape.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-primary-100/5 backdrop-blur-sm rounded-xl p-6 border border-primary-300/20 hover:border-cyber-green/50 transition-all duration-300 card-hover"
            >
              {/* Skill Icon */}
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 rounded-lg mr-4">
                  <skill.icon size={24} className="text-cyber-green" />
                </div>
                <h3 className="text-xl font-semibold text-primary-800">{skill.name}</h3>
              </div>

              {/* Skill Description */}
              <p className="text-primary-600 mb-4 text-sm leading-relaxed">
                {skill.description}
              </p>

              {/* Skill Level */}
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-primary-700">Proficiency</span>
                  <span className="text-sm font-bold text-cyber-green">{skill.level}%</span>
                </div>
                <div className="w-full bg-primary-200/20 rounded-lg h-2">
                  <motion.div
                    className="bg-gradient-to-r from-cyber-green to-cyber-blue h-2 rounded-lg"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-primary-100/5 backdrop-blur-sm rounded-xl p-8 border border-primary-300/20">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Continuous Learning</h3>
            <p className="text-primary-600 max-w-3xl mx-auto leading-relaxed">
              The cybersecurity landscape evolves rapidly. I stay current with the latest threats, 
              techniques, and technologies through continuous education, hands-on practice, 
              and active participation in the security community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
