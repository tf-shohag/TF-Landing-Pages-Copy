import React from 'react';
import dynamic from 'next/dynamic';
import Header from './_components/Header';
import Hero from './_components/Hero';
import ServicesSection from './_components/ServiceSection';

// Use Next.js dynamic imports with loading priority
const ForensicServices = dynamic(() => import('./_components/ForensicServices'), { ssr: true });
const ForensicTypes = dynamic(() => import('./_components/ForensicTypes'), { ssr: true });
const TestimonialSection = dynamic(() => import('./_components/TestimonialSection'), { ssr: true });

// Lower priority components with loading=lazy
const ForensicProcessSection = dynamic(() => import('./_components/ForensicProcessSection'), 
  { loading: () => <div className="h-40 bg-gray-100"></div> });
const YouAreNotAlone = dynamic(() => import('./_components/YouAreNotAlone'), 
  { loading: () => <div className="h-40 bg-gray-100"></div> });
const ConsequencesSection = dynamic(() => import('./_components/ConsequencesSection'), 
  { loading: () => <div className="h-40 bg-gray-100"></div> });
const CaseStudySection = dynamic(() => import('./_components/CaseStudy'), 
  { loading: () => <div className="h-40 bg-gray-100"></div>});
const WhyRightMatchSection = dynamic(() => import('./_components/WhyRightMatchSection'), 
  { loading: () => <div className="h-40 bg-gray-100"></div> });
const SecurityActions = dynamic(() => import('./_components/SecurityActions'), 
  { loading: () => <div className="h-40 bg-gray-100"></div>});
const FAQSection = dynamic(() => import('./_components/FaqSection'), 
  { loading: () => <div className="h-40 bg-gray-100"></div> });
const Footer = dynamic(() => import('./_components/Footer'));

// Load scripts separately with lowest priority
const ScriptIntegration = dynamic(() => import('./ScriptIntegration'));

const DigitalForensicInvestigation = () => {
  return (
    <div className='text-black overflow-hidden'>
      {/* Critical path - load immediately */}
      <Header />
      <Hero />
      <ServicesSection />
      
      {/* Secondary important components */}
      <ForensicServices />
      <ForensicTypes />
      <TestimonialSection />
      
      {/* Components below the fold - load when needed */}
      <ForensicProcessSection />
      <YouAreNotAlone />
      <ConsequencesSection />
      <CaseStudySection />
      <WhyRightMatchSection />
      <SecurityActions />
      <FAQSection />
      <Footer />
      
      {/* Non-critical scripts load last */}
      <ScriptIntegration />
    </div>
  );
};

export default DigitalForensicInvestigation;