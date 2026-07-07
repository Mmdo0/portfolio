import Hero from '../components/Hero'
import WhatIDo from '../components/WhatIDo'
import About from '../components/About'
import Skills from '../components/Skills'
import SectionDivider from '../components/SectionDivider'
import PortfolioDev from '../components/PortfolioDev'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-dark">
        <Hero />
      </div>

      <SectionDivider />

      {/* چه کار می‌کنم؟ */}
      <div className="bg-darker">
        <WhatIDo />
      </div>

      <SectionDivider />

      {/* درباره من */}
      <div className="bg-dark">
        <About />
      </div>

      <SectionDivider />

      {/* مهارت‌ها */}
      <div className="bg-darker">
        <Skills />
      </div>

      <SectionDivider />

      {/* نمونه‌کارهای برنامه‌نویسی – حاشیهٔ سفید ملایم + گلوهای داخلی */}
      <div className="bg-dark py-8">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.03)] bg-dark/40 backdrop-blur-sm p-6 sm:p-10">
          {/* گلوهای نوری داخل کادر */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <PortfolioDev />
          </div>
        </div>
      </div>

      <SectionDivider />

      {/* تماس با من */}
      <div className="bg-darker">
        <Contact />
      </div>
    </>
  )
}