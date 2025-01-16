import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })
const AboutMe = dynamic(() => import('@/components/AboutMe'), { ssr: false })
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false })
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false })
const Education = dynamic(() => import('@/components/Education'), { ssr: false })
const Resume = dynamic(() => import('@/components/Resume'), { ssr: false })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

