import React from 'react'
import Header from './_components/Header'
import Hero from './_components/Hero'
import ServicesSection from './_components/ServiceSection'
import ForensicServices from './_components/ForensicServices'
import ForensicTypes from './_components/ForensicTypes'
import TestimonialSection from './_components/TestimonialSection'
import ForensicProcessSection from './_components/ForensicProcessSection'
import YouAreNotAlone from './_components/YouAreNotAlone'
import ConsequencesSection from './_components/ConsequencesSection'
import CaseStudySection from './_components/CaseStudy'
import WhyRightMatchSection from './_components/WhyRightMatchSection'
import SecurityActions from './_components/SecurityActions'
import FAQSection from './_components/FaqSection'
import Footer from './_components/Footer'
import ScriptIntegration from './ScriptIntegration'

const DigitalForensicInvestigation = () => {
  return (
    <div className='text-black overflow-hidden'>
      <Header />
      <Hero />
      <ServicesSection />
      <ForensicServices />
      <ForensicTypes />
      <TestimonialSection />
      <ForensicProcessSection />
      <YouAreNotAlone />
      <ConsequencesSection />
      <CaseStudySection />
      <WhyRightMatchSection />
      <SecurityActions />
      <FAQSection />
      <Footer />
      <ScriptIntegration />
    </div>
  )
}

export default DigitalForensicInvestigation