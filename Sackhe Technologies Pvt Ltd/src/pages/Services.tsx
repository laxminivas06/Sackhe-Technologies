import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { services } from '../data/constants';

const Services: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Our Services</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive support services to ensure optimal performance and longevity of your waste management systems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-emerald-50 to-blue-50 p-8 rounded-xl border border-emerald-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Detailed Services */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Service Excellence</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We pride ourselves on delivering exceptional service quality across all our offerings
              </p>
            </motion.div>

            <div className="space-y-16">
              {/* Technical Support Details */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Technical Support</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Our dedicated technical team provides round-the-clock support to ensure your systems operate at peak efficiency. Whether you're facing hardware issues, software glitches, or need guidance on system optimization, we're here to help.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        <span>Remote diagnostics and troubleshooting</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        <span>On-site technical assistance</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        <span>Emergency response services</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
                    <span className="text-6xl">🔧</span>
                  </div>
                </div>
              </motion.div>

              {/* Maintenance Services Details */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Maintenance</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Preventive maintenance is key to extending equipment lifespan and ensuring optimal performance. Our maintenance programs are tailored to your specific systems and operational requirements.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Scheduled preventive maintenance</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Component replacement and upgrades</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Performance optimization</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center lg:order-1">
                    <span className="text-6xl">🛠️</span>
                  </div>
                </div>
              </motion.div>

              {/* Advisory Services Details */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Advisory</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Our experts provide strategic guidance to help you implement the most effective waste management solutions for your organization. From initial planning to full-scale implementation, we're your trusted partners.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        <span>Waste management assessments</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        <span>Implementation planning</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        <span>Compliance guidance</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
                    <span className="text-6xl">💡</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Service Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A streamlined approach to delivering exceptional service experiences
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              {[
                { step: '01', title: 'Assessment', description: 'Comprehensive evaluation of your current waste management needs and challenges.' },
                { step: '02', title: 'Planning', description: 'Development of customized service plans tailored to your specific requirements.' },
                { step: '03', title: 'Implementation', description: 'Professional deployment of services with minimal disruption to your operations.' },
                { step: '04', title: 'Monitoring', description: 'Ongoing monitoring and optimization to ensure continued excellence.' }
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Expert Service Support?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our service team is ready to help you maximize the value of your waste management investments.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Contact Our Service Team
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
};

export default Services;