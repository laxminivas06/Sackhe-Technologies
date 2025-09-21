import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import PageTransition from '../components/PageTransition';
import { sdgGoals, products, supporters, company } from '../data/constants';

const Home: React.FC = () => {
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
      transition: { duration: 0.6 }
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-blue-50">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3951628/pexels-photo-3951628.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block">Transforming Waste,</span>
                <span className="block text-emerald-600">Protecting Futures</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Innovative and Sustainable Solutions for Menstrual and Solid Waste Management
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Link to="/products">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span>Explore Our Solutions</span>
                    <HiArrowRight />
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Bar */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-12 bg-white border-b"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-600 mb-8">Trusted by leading institutions</p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center items-center space-x-8 md:space-x-16"
            >
              {supporters.map((supporter) => (
                <motion.div
                  key={supporter.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {supporter.logo}
                  </div>
                  <span className="mt-2 text-sm text-gray-600">{supporter.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* What We Do */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Sackhe Technologies specializes in innovative sustainable solutions addressing critical challenges 
                across various industries. Our core expertise includes emission-controlled incinerators and 
                eco-friendly waste management solutions that promote environmental sustainability, enhance 
                operational efficiency, and contribute to public health and safety.
              </p>
            </div>
          </div>
        </motion.section>

        {/* SDG Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Supporting UN Sustainable Development Goals
              </h2>
              <p className="text-lg text-gray-600">
                Our solutions directly contribute to achieving global sustainability targets
              </p>
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {sdgGoals.map((goal) => (
                <motion.div
                  key={goal.number}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-xl border border-emerald-100 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    {goal.number}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                    {goal.title}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Product Teaser */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Solutions</h2>
              <p className="text-lg text-gray-600">
                Cutting-edge technology for sustainable waste management
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${product.image})` }}></div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <Link to="/products">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center space-x-2"
                      >
                        <span>Learn More</span>
                        <HiArrowRight />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Waste Management?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us in creating a sustainable future. Contact our team to learn how our solutions 
              can benefit your organization.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Get Started Today
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
};

export default Home;