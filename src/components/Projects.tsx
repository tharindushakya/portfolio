import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Award, Calendar, Tag } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  impact: string;
  date: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

const Projects: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: "Bug Bounty: Critical RCE Discovery",
      description: "Discovered and responsibly disclosed a critical Remote Code Execution vulnerability in a popular SaaS platform. The vulnerability allowed complete system compromise and was awarded the highest severity rating.",
      tags: ["Bug Bounty", "RCE", "Code Review"],
      impact: "* bounty reward, CVE assigned",
      date: "2024",
      liveUrl: "#"
    },
    {
      title: "Network Security Assessment Framework",
      description: "Developed a comprehensive network security assessment tool that automates vulnerability scanning and generates detailed reports. The tool identifies misconfigurations, open ports, and potential attack vectors.",
      tags: ["Network Security", "Automation", "Python"],
      impact: "Reduced assessment time by 70%",
      date: "2025",
      githubUrl: "https://github.com/tharindushakya/network-security-assessment-framework.git",
      liveUrl: "https://tharindushakya.github.io/network-security-assessment-framework/"
    },
    {
      title: "SQL Injection Detection in E-commerce",
      description: "Identified and exploited multiple SQL injection vulnerabilities in a major e-commerce platform. Developed proof-of-concept exploits and provided comprehensive remediation guidelines.",
      tags: ["Bug Bounty", "SQL Injection", "Web Security"],
      impact: "$5,000 bounty reward, 15,000+ users protected",
      date: "2024",
      liveUrl: "#"
    },
    {
      title: "Malware Analysis Lab Setup",
      description: "Built a complete isolated malware analysis environment using VirtualBox and REMnux. Analyzed 50+ malware samples and documented IOCs and TTPs for threat intelligence.",
      tags: ["Malware Analysis", "Threat Intelligence", "Lab Setup"],
      impact: "Enhanced threat detection capabilities, 50+ IOCs documented",
      date: "2025",
      githubUrl: "https://github.com/tharindushakya/malware-analysis-lab.git"
    },
    {
      title: "CSRF Vulnerability Research",
      description: "Conducted extensive research on Cross-Site Request Forgery attacks in modern web applications. Discovered novel bypass techniques for CSRF protection mechanisms.",
      tags: ["Web Security", "CSRF", "Research"],
      impact: "Published research paper, 3 CVEs assigned",
      date: "2023",
      liveUrl: "#"
    },
    {
      title: "Penetration Testing Automation",
      description: "Created a custom penetration testing toolkit that automates reconnaissance, vulnerability assessment, and reporting phases. Integrated multiple security tools into a unified workflow.",
      tags: ["Penetration Testing", "Automation", "Security Tools"],
      impact: "40% faster pen-test delivery, adopted by security team",
      date: "2025",
      githubUrl: "https://github.com/tharindushakya/network-security-assessment-framework.git"
    },
    {
      title: "Mobile App Security Analysis",
      description: "Performed comprehensive security analysis of Android and iOS applications. Identified sensitive data exposure, insecure communications, and authentication bypasses.",
      tags: ["Mobile Security", "Android", "iOS"],
      impact: "12 critical vulnerabilities found, apps secured for 100k+ users",
      date: "2022",
      liveUrl: "#"
    }
  ];

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  const filteredProjects = selectedTag 
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    // Convert date strings to comparable format (handle "*" as most recent)
    const dateA = a.date === "*" ? "9999" : a.date;
    const dateB = b.date === "*" ? "9999" : b.date;
    return dateB.localeCompare(dateA);
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Security Projects</span>
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Real-world cybersecurity projects showcasing practical skills, 
            measurable impact, and commitment to improving digital security.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={selectedTag || 'all'}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {sortedProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-primary-100/5 backdrop-blur-sm rounded-xl p-6 border border-primary-300/20 hover:border-cyber-green/50 transition-all duration-300 card-hover"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-800 mb-2">{project.title}</h3>
                  <div className="flex items-center text-sm text-primary-500 mb-3">
                    <Calendar size={16} className="mr-2" />
                    {project.date}
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.12 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center w-10 h-10 leading-none rounded-full transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,65,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-green/60"
                      title="View Code"
                    >
                      <Github className="w-5 h-5 text-primary-600 hover:text-cyber-green transition-colors" />
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.12 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center w-10 h-10 leading-none rounded-full transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,212,255,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-blue/60"
                      title="View Project"
                    >
                      <ExternalLink className="w-5 h-5 text-primary-600 hover:text-cyber-blue transition-colors" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Description */}
              <p className="text-primary-600 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-4 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className={`inline-flex items-center gap-2.5 pl-5 pr-6 py-1.5 text-sm font-medium rounded-xl border cursor-pointer transition-all duration-300 whitespace-nowrap ${
                      selectedTag === tag
                        ? 'bg-cyber-green/25 text-cyber-green border-cyber-green/50 shadow-[0_0_0_1px_rgba(0,255,65,0.25)]'
                        : 'bg-cyber-green/10 text-cyber-green border-cyber-green/25 hover:bg-cyber-green/15'
                    }`}
                  >
                    <Tag size={14} className="shrink-0 ml-2" />
                    <span className="tracking-wide mr-2 ml-2">{tag}</span>
                  </span>
                ))}
              </div>

              {/* Impact */}
              <div className="bg-primary-200/10 rounded-lg p-3 border border-cyber-green/20">
                <div className="flex items-center mb-1">
                  <Award size={16} className="text-cyber-green mr-2" />
                  <span className="text-sm font-semibold text-primary-700">Impact</span>
                </div>
                <p className="text-sm text-primary-600">{project.impact}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-primary-100/5 backdrop-blur-sm rounded-xl p-8 border border-primary-300/20">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready for Your Next Project?</h3>
            <p className="text-primary-600 mb-6 max-w-2xl mx-auto">
              I'm always looking for challenging cybersecurity projects where I can apply my skills 
              and make a meaningful impact on your organization's security posture.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyber-green to-cyber-blue text-primary-50 font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Let's Collaborate
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
