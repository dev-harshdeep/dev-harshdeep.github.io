'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="education" className="py-20 bg-gray-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-teal-500"
        >
          Education
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-6 shadow-lg relative"
        >
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-1 bg-teal-500"
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.div variants={itemVariants} className="flex items-center mb-4">
            <GraduationCap size={24} className="text-teal-500 mr-2" />
            <h3 className="text-xl font-semibold">Bachelor of Technology in Computer Science and Engineering</h3>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-center mb-2 text-gray-400">
            <Calendar size={18} className="mr-2" />
            <p>2020 - 2024 (Expected)</p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-center mb-4 text-gray-400">
            <MapPin size={18} className="mr-2" />
            <p>XYZ Institute of Technology</p>
          </motion.div>
          <motion.ul variants={containerVariants} className="list-disc list-inside text-gray-300 space-y-2">
            <motion.li variants={itemVariants}>
              CGPA: 8.5/10
            </motion.li>
            <motion.li variants={itemVariants}>
              Relevant Coursework: Data Structures, Algorithms, Database Management Systems, Web Development, Machine Learning
            </motion.li>
            <motion.li variants={itemVariants}>
              Member of the College Coding Club
            </motion.li>
            <motion.li variants={itemVariants}>
              Participated in various hackathons and coding competitions
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Education

