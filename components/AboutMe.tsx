'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Code, Lightbulb, Users } from 'lucide-react';

const AboutMe = () => {
  const interests = [
    { icon: Code, text: 'Coding' },
    { icon: Lightbulb, text: 'Innovation' },
    { icon: Users, text: 'Collaboration' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-teal-500"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/3 mb-8 md:mb-0"
          >
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Harshdeep Johi"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="md:w-2/3 md:pl-8"
          >
            <motion.p variants={itemVariants} className="text-lg mb-6">
              Hello! I'm Harshdeep Joshi, a software engineer passionate about
              learning, evolving, and making a difference through technology. I
              thrive in dynamic environments where I can embrace new challenges,
              explore innovative solutions, and continually refine my skills.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg mb-6">
              Adaptability is at the core of my approach—whether it's mastering
              the latest tools, diving into a new domain, or solving complex
              problems, I'm always ready to learn and grow. I believe that
              staying curious and open to change is key to thriving in the
              ever-evolving world of technology.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg mb-6">
              When I'm not writing code, you'll find me exploring new tech
              trends, experimenting with creative projects, or collaborating
              with others to turn ideas into reality. Let's connect and build
              something extraordinary together!
            </motion.p>
            <motion.div
              variants={containerVariants}
              className="flex justify-center space-x-6"
            >
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <interest.icon size={32} className="text-teal-500 mb-2" />
                  <span className="text-sm text-gray-400">{interest.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
