import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Github, Globe, User } from 'lucide-react';

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 200);
    
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl animate-pulse" />
    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-transparent to-purple-600/10 blur-2xl" />
  </div>
);

const IconButton = ({ Icon }) => (
  <div className="relative group hover:scale-110 transition-transform duration-300">
    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300" />
    <div className="relative p-2 sm:p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
    </div>
  </div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set loading timer
    const loadingTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    
    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    // Call onLoadingComplete after exit animation completes
    if (!isVisible) {
      const completeTimer = setTimeout(() => {
        onLoadingComplete?.();
      }, 1000); // Match this with exit animation duration
      
      return () => clearTimeout(completeTimer);
    }
  }, [isVisible, onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-[#030014] z-50"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: {
          duration: 0.8,
          ease: [0.43, 0.13, 0.23, 0.96]
        }
      }}
    >
      <BackgroundEffect />
      
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* Icons */}
          <motion.div 
            className="flex justify-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8 md:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {[Code2, User, Github].map((Icon, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (index * 0.2), duration: 0.6 }}
              >
                <IconButton Icon={Icon} />
              </motion.div>
            ))}
          </motion.div>

          {/* Welcome Text */}
          <motion.div 
            className="text-center mb-6 sm:mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold space-y-2 sm:space-y-4">
              <motion.div 
                className="mb-2 sm:mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <span className="inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                  Welcome
                </span>{' '}
                <span className="inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                  To
                </span>{' '}
                <span className="inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                  My
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <span className="inline-block px-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Portfolio
                </span>{' '}
                <span className="inline-block px-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Website
                </span>
              </motion.div>
            </h1>
          </motion.div>

          {/* Website Link */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <a
              href="https://www.aashirgrewal.com"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full relative group hover:scale-105 transition-transform duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
              <div className="relative flex items-center gap-2 text-lg sm:text-xl md:text-2xl">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  <TypewriterEffect text="www.aashirgrewal.com" />
                </span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;