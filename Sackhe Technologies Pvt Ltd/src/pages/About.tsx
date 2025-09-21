import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { company, customers } from '../data/constants';

const About: React.FC = () => {
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
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">About Us</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leading the revolution in sustainable waste management through innovation and commitment to environmental protection.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Story */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Sackhe Technologies Pvt Ltd was founded with a vision to address one of the most pressing challenges of our time - sustainable waste management. Our journey began with the recognition that traditional waste disposal methods were not only harming our environment but also posing significant health risks to communities worldwide.
                  </p>
                  <p>
                    Through extensive research and development, we have pioneered innovative solutions that combine cutting-edge technology with environmental consciousness. Our team of dedicated engineers, environmental scientists, and sustainability experts work tirelessly to create products that not only solve immediate waste management problems but also contribute to long-term environmental protection.
                  </p>
                  <p>
                    Today, we specialize in emission-controlled incinerators and comprehensive waste management systems that serve diverse sectors including educational institutions, healthcare facilities, municipalities, and industrial complexes. Our solutions are designed to promote environmental sustainability, enhance operational efficiency, and contribute to public health and safety.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6">
                  M
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {company.mission}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6">
                  V
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {company.vision}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Customers Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who We Serve</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our solutions are designed to meet the diverse needs of various sectors, contributing to a more sustainable future for all.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {customers.map((customer, index) => (
                <motion.div
                  key={customer.name}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-xl border border-emerald-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4">
                    {customer.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{customer.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{customer.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 bg-gray-900 text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
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
                { title: 'Innovation', description: 'Pioneering sustainable solutions for complex environmental challenges' },
                { title: 'Sustainability', description: 'Committed to protecting our planet for future generations' },
                { title: 'Excellence', description: 'Delivering the highest quality products and services' },
                { title: 'Integrity', description: 'Building trust through transparent and ethical practices' }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    {value.title.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
};

export default About;