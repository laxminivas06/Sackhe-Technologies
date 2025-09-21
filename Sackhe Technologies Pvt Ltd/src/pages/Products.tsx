import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';
import PageTransition from '../components/PageTransition';
import { products } from '../data/constants';

const Products: React.FC = () => {
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
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Our Products</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Innovative waste management solutions designed for sustainability, efficiency, and environmental protection.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  >
                    <div
                      className="h-96 bg-cover bg-center rounded-xl shadow-lg"
                      style={{ backgroundImage: `url(${product.image})` }}
                    ></div>
                  </motion.div>

                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-4xl font-bold text-gray-900"
                      >
                        {product.name}
                      </motion.h2>
                      
                      <motion.p
                        variants={itemVariants}
                        className="text-lg text-gray-600 leading-relaxed"
                      >
                        {product.description}
                      </motion.p>

                      {/* Features */}
                      <motion.div variants={itemVariants} className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-900">Key Features:</h3>
                        <ul className="space-y-2">
                          {product.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                              className="flex items-start space-x-3"
                            >
                              <HiCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                              <span className="text-gray-700">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>

                      {/* Ideal For */}
                      <motion.div variants={itemVariants} className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-900">Ideal For:</h3>
                        <div className="flex flex-wrap gap-2">
                          {product.idealFor.map((target, targetIndex) => (
                            <motion.span
                              key={targetIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: targetIndex * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                              className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {target}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Products?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our solutions offer comprehensive benefits that go beyond waste management
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  title: 'Environmental Impact',
                  description: 'Reduce carbon footprint and promote sustainable waste disposal practices',
                  icon: '🌱'
                },
                {
                  title: 'Cost Effectiveness',
                  description: 'Lower operational costs through efficient waste processing and management',
                  icon: '💰'
                },
                {
                  title: 'Health & Safety',
                  description: 'Ensure community health through safe, hygienic waste disposal methods',
                  icon: '🏥'
                },
                {
                  title: 'Compliance',
                  description: 'Meet all environmental regulations and waste management standards',
                  icon: '✅'
                },
                {
                  title: 'Reliability',
                  description: 'Robust, durable systems designed for continuous operation',
                  icon: '🔧'
                },
                {
                  title: 'Support',
                  description: 'Comprehensive technical support and maintenance services',
                  icon: '🤝'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
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
                Ready to Implement Our Solutions?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Contact our team to discuss your specific requirements and get a customized solution for your organization.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Request a Consultation
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
};

export default Products;