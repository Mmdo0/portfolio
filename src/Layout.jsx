import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'

export default function Layout({ toggleLanguage, currentLang }) {
  return (
    <>
      <AnimatedBackground />
      <Navbar toggleLanguage={toggleLanguage} currentLang={currentLang} />
      <main className="relative z-10 min-h-screen pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}