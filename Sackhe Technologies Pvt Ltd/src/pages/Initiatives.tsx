import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { initiatives } from '../data/constants';

const Initiatives: React.FC = () => {
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
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Our Initiatives</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Empowering communities through education, awareness, and sustainable solutions for women's health and empowerment.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Initiatives Grid */}
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {initiatives.map((initiative, index) => (
                <motion.div
                  key={initiative.name}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    initiative.emphasized
                      ? 'bg-gradient-to-br from-emerald-100 to-blue-100 border-2 border-emerald-300 lg:col-span-2'
                      : 'bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-100'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 ${
                    initiative.emphasized ? 'bg-emerald-600' : 'bg-emerald-500'
                  }`}>
                    {initiative.name.charAt(0)}
                  </div>
                  <h3 className={`font-bold text-gray-900 mb-4 ${
                    initiative.emphasized ? 'text-3xl' : 'text-2xl'
                  }`}>
                    {initiative.name}
                  </h3>
                  <p className={`text-gray-600 leading-relaxed ${
                    initiative.emphasized ? 'text-lg' : ''
                  }`}>
                    {initiative.description}
                  </p>
                  {initiative.emphasized && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="mt-6 p-4 bg-white rounded-lg border-l-4 border-emerald-500"
                    >
                      <p className="text-sm text-gray-700 font-medium">🌟 Featured Initiative</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Our flagship program focused on breaking menstruation taboos and ensuring every girl has access to proper menstrual health education and facilities.
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Impact Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Impact</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Making a difference in communities through targeted initiatives and sustainable solutions
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { number: '500+', label: 'Women Empowered', icon: '👩' },
                { number: '50+', label: 'Educational Institutions', icon: '🏫' },
                { number: '25+', label: 'Communities Reached', icon: '🌍' },
                { number: '1000+', label: 'Lives Impacted', icon: '❤️' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Initiative Detail */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-3xl mb-6">
                  C
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Cycle of Change</h2>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Our flagship initiative, <strong>Cycle of Change</strong>, is at the heart of our mission to revolutionize menstrual health awareness and accessibility. This comprehensive program addresses the critical need for education, infrastructure, and cultural change around menstruation.
                  </p>
                  <p>
                    Through partnerships with schools, colleges, and community organizations, we provide:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0"></span>
                      <span>Comprehensive menstrual health education programs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0"></span>
                      <span>Installation of menstrual waste incinerators in institutions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0"></span>
                      <span>Community awareness campaigns to break taboos</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0"></span>
                      <span>Training programs for educators and healthcare workers</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-emerald-100 to-blue-100 p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Highlights</h3>
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-600 mb-2">Education First</h4>
                    <p className="text-gray-600 text-sm">Breaking myths and providing accurate information about menstrual health and hygiene.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-600 mb-2">Infrastructure Support</h4>
                    <p className="text-gray-600 text-sm">Installing eco-friendly menstrual waste disposal systems in schools and colleges.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-600 mb-2">Community Engagement</h4>
                    <p className="text-gray-600 text-sm">Working with local communities to create supportive environments for menstrual health.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* How We Help */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How We Make a Difference</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our multi-faceted approach addresses the root causes of menstrual health challenges
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: 'Breaking Barriers',
                  description: 'Addressing cultural taboos and social stigma through education and awareness campaigns.',
                  icon: '🚧'
                },
                {
                  title: 'Providing Access',
                  description: 'Ensuring access to safe, hygienic menstrual waste disposal facilities in educational institutions.',
                  icon: '🎯'
                },
                {
                  title: 'Building Confidence',
                  description: 'Empowering women and girls with knowledge and resources to manage their menstrual health with dignity.',
                  icon: '💪'
                }
              ].map((approach, index) => (
                <motion.div
                  key={approach.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{approach.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{approach.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{approach.description}</p>
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
                Join Our Mission
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Partner with us to create lasting change in your community. Together, we can build a world where every woman has access to dignity and health.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Become a Partner
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
};

export default Initiatives;