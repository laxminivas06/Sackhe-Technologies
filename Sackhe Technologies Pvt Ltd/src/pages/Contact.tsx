import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import PageTransition from '../components/PageTransition';
import { company } from '../data/constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', organization: '', phone: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
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
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Contact Us</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to transform your waste management? Get in touch with our team to discuss your specific requirements and discover how we can help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                        Organization
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your organization"
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your phone number"
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message *
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tell us about your waste management needs..."
                    />
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : submitStatus === 'success'
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-emerald-600 hover:bg-emerald-700'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <span>✓ Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <HiPaperAirplane />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  {submitStatus === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-600 text-center font-medium"
                    >
                      Thank you for your message! We'll get back to you soon.
                    </motion.p>
                  )}
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    We're here to help you find the perfect waste management solution for your organization. 
                    Reach out to our team of experts for personalized guidance and support.
                  </p>
                </div>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-4 bg-emerald-50 rounded-lg"
                  >
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                      <HiPhone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">{company.phone}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg"
                  >
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <HiMail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">{company.email}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-4 bg-emerald-50 rounded-lg"
                  >
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                      <HiLocationMarker className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">{company.address}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Business Hours */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Map Section */}
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
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
              <p className="text-lg text-gray-600">
                Located in the heart of Hyderabad, we're easily accessible for meetings and consultations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <HiLocationMarker className="mx-auto text-emerald-500 mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Map</h3>
                  <p className="text-gray-600">
                    Google Maps integration would be embedded here<br />
                    showing the exact location of Sackhe Technologies
                  </p>
                  <div className="mt-4 text-sm text-gray-500">
                    📍 {company.address}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Section */}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get quick answers to common questions about our products and services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: 'How long does installation take?',
                  answer: 'Installation typically takes 1-3 days depending on the system size and complexity. Our team ensures minimal disruption to your operations.'
                },
                {
                  question: 'Do you provide training for staff?',
                  answer: 'Yes, we provide comprehensive training for your staff as part of our installation package, ensuring proper operation and maintenance.'
                },
                {
                  question: 'What maintenance is required?',
                  answer: 'Our systems require minimal maintenance. We offer service packages that include regular inspections and preventive maintenance.'
                },
                {
                  question: 'Are your systems environmentally compliant?',
                  answer: 'Absolutely. All our systems meet or exceed environmental regulations and emissions standards for safe operation.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
};

export default Contact;