'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ConsequencesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prevTab => (prevTab < data.length - 1 ? prevTab + 1 : 0));
    }, 3000); // Change every 3 seconds
    
    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  // This ensures we're showing images in Next.js correctly
  const imagePath = (path) => {
    // Make sure the path is properly formatted for Next.js Image component
    return path;
  };

  return (
    <div className='container mx-auto px-4 py-16 '>
      <div className='flex items-center justify-center mb-16'>
        <h2 className='text-secondary text-3xl lg:text-4xl font-semibold text-center max-w-4xl uppercase'>
          What Are the <span className='text-primary'>Consequences</span> of Not Investigating Digital Evidence?
        </h2>
      </div>
      
      <div className='flex items-center justify-center gap-8 flex-col md:flex-row'>
        {/* Left side: Tabs */}
        <div className='flex flex-col gap-4 border-l border-l-primary min-w-full md:min-w-[500px]'>
          {data.map((item, index) => (
            <div 
              className={`cursor-pointer transition-all duration-300 ${
                index === activeTab 
                  ? 'bg-primary text-2xl font-bold p-4 text-white' 
                  : index === ((activeTab + 1) % data.length)
                    ? 'text-xl font-semibold text-gray-600 p-3'
                    : 'p-2'
              }`}
              key={item.title}
              onClick={() => setActiveTab(index)}
            >
              {item.title}
            </div>
          ))}
        </div>
        
        {/* Right side: Image */}
        <div className='relative rounded-md overflow-hidden w-full max-w-[700px] h-[400px]'>
          {data.map((item, index) => (
            <div 
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                index === activeTab ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Using Next.js Image with proper sizing */}
              <div className="relative w-full h-full">
                <Image 
                  src={imagePath(item.image)}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover"
                  priority={index === activeTab || index === (activeTab + 1) % data.length}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsequencesSection;

const data = [
  { title: 'Loss of Critical Evidence', image: '/dfi/conse1.webp' },
  { title: 'Important data may be lost permanently.', image: '/dfi/conse2.webp' },
  { title: 'Legal & Financial Risks', image: '/dfi/conse3.webp' },
  { title: 'Cybercrime Escalation', image: '/dfi/conse4.webp' },
  { title: 'Data Integrity Issues', image: '/dfi/conse5.webp' },
  { title: 'Reputation Damage', image: '/dfi/conse6.webp' },
];