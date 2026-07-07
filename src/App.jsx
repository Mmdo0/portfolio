import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import VideoPage from './pages/VideoPage'
import ScrollToTop from './components/ScrollToTop' // <-- اضافه

function App() {
  const { i18n } = useTranslation()
  const [lang, setLang] = useState('fa')

  useEffect(() => {
    const dir = lang === 'fa' ? 'rtl' : 'ltr'
    document.documentElement.dir = dir
    document.documentElement.lang = lang
  }, [lang])

  const toggleLanguage = () => {
    const newLang = lang === 'fa' ? 'en' : 'fa'
    i18n.changeLanguage(newLang)
    setLang(newLang)
  }

  return (
    <>
      <ScrollToTop /> {/* اینجا، قبل از Routes */}
      <Routes>
        <Route element={<Layout toggleLanguage={toggleLanguage} currentLang={lang} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/video" element={<VideoPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App