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
    }, 50);

    return () => clearInterval(timer);
  }, [text]);

  return <span>{displayText}</span>;
};

const FloatingIcon = ({ icon: Icon, delay, position }) => (
  <motion.div
    className={`absolute ${position} opacity-30`}
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: 0.3,
      y: [0, -15, 0],
      transition: {
        delay,
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }}
  >
    <Icon className="w-8 h-8 text-indigo-500" />
  </motion.div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  useEffect(() => {
    const t = setTimeout(() => {
      onLoadingComplete?.();
    }, 5000);

    return () => clearTimeout(t);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#030014] z-50"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.8,
          ease: [0.43, 0.13, 0.23, 0.96],
        },
      }}
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-500 rounded-full"
            initial={{
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: [null, Math.random() * -100],
              transition: {
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                delay: Math.random() * 2,
              },
            }}
          />
        ))}
      </div>

      {/* Floating icons */}
      <FloatingIcon icon={Code2} delay={0.2} position="top-20 left-20" />
      <FloatingIcon icon={Github} delay={0.4} position="top-40 right-32" />
      <FloatingIcon icon={Globe} delay={0.6} position="bottom-32 left-32" />
      <FloatingIcon icon={User} delay={0.8} position="bottom-20 right-20" />

      <div className="flex items-center justify-center h-full px-4">
        <div className="text-center relative">
          {/* Main Logo/Icon */}
          <motion.div
            className="relative mx-auto mb-8 sm:mb-12 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
            initial={{ scale: 0, rotate: -180 }}
            animate={{
              scale: 1,
              rotate: 0,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2
              }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-lg opacity-60" />
            <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-4 sm:p-5 md:p-6">
              <Code2 className="w-full h-full text-white" />
            </div>
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
                <span className="inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Welcome to
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Aashir's Portfolio
                </span>
              </motion.div>
            </h1>

            <motion.p
              className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-gray-400 px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <TypewriterEffect text="Full Stack Developer | Designer | Creator" />
            </motion.p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="w-64 sm:w-80 md:w-96 mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
          >
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-600 to-purple-600"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.4, duration: 3.6, ease: "easeInOut" }}
              />
            </div>
            <motion.p
              className="mt-4 text-sm sm:text-base text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              Loading Experience...
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="mt-8 sm:mt-12 flex justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <a
              href="https://github.com/Aashir-G"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div
                className="p-2 sm:p-3 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-indigo-400 transition-colors" />
              </motion.div>
            </a>

            <a
              href="https://www.linkedin.com/in/aashirg/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div
                className="p-2 sm:p-3 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-indigo-400 transition-colors" />
              </motion.div>
            </a>

            <a
              href="https://aashirg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div
                className="p-2 sm:p-3 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-indigo-500 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative flex items-center gap-2 text-lg sm:text-xl md:text-2xl">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    <TypewriterEffect text="www.aashirg.com" />
                  </span>
                </div>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;
