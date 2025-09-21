import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { company, supporters, navigation } from '../data/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ST</span>
              </div>
              <span className="font-bold text-lg">{company.name}</span>
            </div>
            <p className="text-gray-400 text-sm">
              Leading the way in sustainable waste management solutions for a cleaner, healthier future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <HiLocationMarker className="text-emerald-400" />
                <span>{company.address}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <HiPhone className="text-emerald-400" />
                <span>{company.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <HiMail className="text-emerald-400" />
                <span>{company.email}</span>
              </div>
            </div>
          </div>

          {/* Supporters */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Supporters</h3>
            <div className="space-y-2">
              {supporters.map((supporter) => (
                <motion.div
                  key={supporter.name}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center">
                    <span className="text-xs font-bold">{supporter.logo}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{supporter.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">
            © 2024 {company.name}. All rights reserved.
          </p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-emerald-400 font-medium"
          >
            {company.tagline}
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;