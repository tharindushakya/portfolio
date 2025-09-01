import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle, Clock } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  status: 'earned' | 'in-progress' | 'planned';
  credentialId?: string;
  validUntil?: string;
  description: string;
  verificationUrl?: string;
  logo?: string;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "Q3 2026",
      status: "planned",
      description: "Comprehensive ethical hacking and penetration testing certification covering the latest security threats and countermeasures.",
      verificationUrl: "https://www.eccouncil.org/verify"
    },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      date: "Q3 2025",
      status: "planned",
      description: "Foundational cybersecurity certification covering network security, compliance, and operational security.",
      verificationUrl: "https://www.certmetrics.com/comptia/public/verification.aspx"
    },
    {
      name: "GIAC Penetration Tester (GPEN)",
      issuer: "SANS Institute",
      date: "Q1 2026",
      status: "planned",
      description: "Advanced penetration testing certification focusing on hands-on skills for conducting thorough security assessments.",
      verificationUrl: "https://www.giac.org/verify"
    },
    {
      name: "Certified Cloud Security Professional (CCSP)",
      issuer: "ISC²",
      date: "Q2 2026",
      status: "planned",
      description: "Advanced cloud security certification covering cloud architecture, design, operations, and service orchestration security.",
      verificationUrl: "https://www.isc2.org/verify"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'earned':
        return <CheckCircle size={20} className="text-cyber-green" />;
      case 'in-progress':
        return <Clock size={20} className="text-cyber-blue" />;
      case 'planned':
        return <Calendar size={20} className="text-primary-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'earned':
        return 'Certified';
      case 'in-progress':
        return 'In Progress';
      case 'planned':
        return 'Planned';
      default:
        return '';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'earned':
        return 'border-cyber-green/50 bg-cyber-green/5';
      case 'in-progress':
        return 'border-cyber-blue/50 bg-cyber-blue/5';
      case 'planned':
        return 'border-primary-400/50 bg-primary-200/5';
      default:
        return 'border-primary-300/20';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications & Live Progress</span>
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Industry-recognized certifications and real-time hands-on lab progress reflecting continuous learning in
            cybersecurity, ethical hacking, and security architecture.
          </p>
        </motion.div>

        {/* TryHackMe Live Badge */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-primary-100/5 backdrop-blur-sm rounded-xl p-6 border border-primary-300/20 flex flex-col md:flex-row items-center gap-6 md:gap-10 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <div className="absolute -top-16 -left-10 w-56 h-56 bg-cyber-green/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -right-10 w-72 h-72 bg-cyber-blue/10 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 w-full md:w-auto flex justify-center">
              <div className="rounded-lg border border-primary-300/30 shadow-inner shadow-black/30 bg-primary-200/5 p-2">
                <iframe
                  title="TryHackMe Progress Badge"
                  src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=303130"
                  loading="lazy"
                  className="w-[300px] h-[180px] md:w-[340px] md:h-[200px] rounded-md border-0"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="relative z-10 flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3 text-primary-800">Hands-On Lab Progress</h3>
              <p className="text-primary-600 text-sm leading-relaxed mb-4 max-w-xl mx-auto md:mx-0">
                Live training streak and room completion stats update automatically from the TryHackMe platform. This badge
                showcases practical engagement with offensive, defensive, and blue team labs beyond theoretical study.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-cyber-green/15 text-cyber-green border border-cyber-green/30 tracking-wide">
                  Real-Time
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-cyber-blue/15 text-cyber-blue border border-cyber-blue/30 tracking-wide">
                  Continuous Learning
                </span>
                <a
                  href="https://tryhackme.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-xs font-medium rounded-full bg-primary-200/10 text-primary-600 border border-primary-300/30 hover:border-cyber-green/50 hover:text-cyber-green transition-colors"
                >
                  View Platform
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`bg-primary-100/5 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 card-hover ${getStatusColor(cert.status)}`}
            >
              {/* Certification Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    {getStatusIcon(cert.status)}
                    <span className="ml-2 text-sm font-medium text-primary-600">
                      {getStatusText(cert.status)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary-800 mb-1">{cert.name}</h3>
                  <p className="text-sm text-primary-600 font-medium">{cert.issuer}</p>
                </div>
                <div className="p-2 bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 rounded-lg">
                  <Award size={20} className="text-cyber-green" />
                </div>
              </div>

              {/* Certification Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm text-primary-600">
                  <Calendar size={16} className="mr-2" />
                  <span>
                    {cert.status === 'earned' ? 'Earned: ' : cert.status === 'in-progress' ? 'Target: ' : 'Planned: '}
                    {cert.date}
                  </span>
                </div>

                {cert.credentialId && (
                  <div className="text-sm">
                    <span className="text-primary-600">ID: </span>
                    <span className="text-primary-700 font-mono">{cert.credentialId}</span>
                  </div>
                )}

                {cert.validUntil && (
                  <div className="text-sm text-primary-600">
                    <span>Valid until: {cert.validUntil}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-primary-600 mb-4 leading-relaxed">
                {cert.description}
              </p>

              {/* Verification Link */}
              {cert.verificationUrl && cert.status === 'earned' && (
                <motion.a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center text-sm text-cyber-green hover:text-cyber-blue transition-colors font-medium"
                >
                  <ExternalLink size={14} className="mr-1" />
                  Verify Credential
                </motion.a>
              )}
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
            <h3 className="text-2xl font-bold mb-4 gradient-text">Commitment to Excellence</h3>
            <p className="text-primary-600 max-w-3xl mx-auto leading-relaxed">
              These certifications represent my dedication to maintaining the highest standards 
              in cybersecurity. I continuously pursue advanced training and certifications to 
              stay current with emerging threats and security technologies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-green mb-2">
                  {certifications.filter(c => c.status === 'earned').length}+
                </div>
                <div className="text-sm text-primary-600">Earned Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-blue mb-2">
                  {certifications.filter(c => c.status === 'in-progress').length}
                </div>
                <div className="text-sm text-primary-600">In Progress</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500 mb-2">
                  {certifications.filter(c => c.status === 'planned').length}
                </div>
                <div className="text-sm text-primary-600">Planned</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
