'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link as ScrollLink, Events } from 'react-scroll'
import { Home, User, Code, Briefcase, GraduationCap, FileText, Mail } from 'lucide-react'

const navItems = [
  { name: 'Home', icon: Home, to: 'home' },
  { name: 'About', icon: User, to: 'about' },
  { name: 'Skills', icon: Code, to: 'skills' },
  { name: 'Projects', icon: Briefcase, to: 'projects' },
  { name: 'Education', icon: GraduationCap, to: 'education' },
  { name: 'Resume', icon: FileText, to: 'resume' },
  { name: 'Contact', icon: Mail, to: 'contact' },
]

const FixedNav = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleSetActive = (to: string) => {
      setActiveSection(to)
    }

    Events.scrollEvent.register('begin', (to) => {
      console.log('begin', to)
    })

    Events.scrollEvent.register('end', (to) => {
      console.log('end', to)
    })

    return () => {
      Events.scrollEvent.remove('begin')
      Events.scrollEvent.remove('end')
    }
  }, [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-80 backdrop-blur-sm z-50 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <ul className="flex justify-center space-x-6">
          {navItems.map((item) => (
            <motion.li key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <ScrollLink
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={() => setActiveSection(item.to)}
              >
                <span className={`flex items-center cursor-pointer ${
                  activeSection === item.to
                    ? 'text-teal-500'
                    : 'text-gray-400 hover:text-teal-500'
                }`}>
                  <item.icon size={20} className="mr-1" />
                  <span className="hidden sm:inline">{item.name}</span>
                </span>
              </ScrollLink>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}

export default FixedNav

