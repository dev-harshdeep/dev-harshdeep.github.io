'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-teal-500">Download My Resume</h2>
          <p className="text-lg mb-8 text-gray-300">
            Get a comprehensive overview of my skills, experience, and educational background by downloading my resume.
          </p>
          <motion.a
            href="/Resume_HarshdeepJoshi.pdf"
            download
            className="inline-flex items-center bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-teal-600 hover:to-blue-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume

