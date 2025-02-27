'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const WhyRightMatchSection = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    // Feature cards data
    const featureCards = [
        {
            id: 'certifications',
            title: 'Certified Digital Forensic Experts',
            description: 'Specialists in cyber investigations and legal forensics.',
            sideName: 'Certifications',
            icons: ['/dfi/ceh.webp', '/dfi/cisa.webp', '/dfi/cissp.webp'],
        },
        {
            id: 'legal-report',
            title: 'Legally Admissible Reports',
            description: 'Our findings can be used in court cases.',
            sideName: 'Legal Report',
        },
        {
            id: 'advanced-tools',
            title: 'Advanced Digital Recovery Tools',
            description: 'We use cutting-edge forensic technology.',
            sideName: 'Advanced tools',
        },
        {
            id: 'response',
            title: 'Immediate Response',
            description: 'We act quickly to recover and analyze data.',
            sideName: 'Response',
        },
        {
            id: 'coverage',
            title: 'Global Coverage',
            description: 'We handle investigations in over 114 countries.',
            sideName: 'Coverage',
        },
    ];

    // Media logos
    const mediaLogos = [
        'BBC', 'Business Insider', 'CNN', 'Forbes', 'TechCrunch',
        'Entrepreneur', 'Cyber', 'NBC', 'World Economic Forum'
    ];

    return (
        <div className="container mx-auto px-4 py-16 bg-white">
            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
                <span className="text-secondary">WHY WE ARE </span>
                <span className="text-primary">THE RIGHT MATCH</span>
                <span className="text-secondary"> FOR<br />YOUR CASE</span>
            </motion.h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {/* Left side: Feature cards */}
                <div className="space-y-4">
                    {featureCards.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.5, duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className={`flex rounded-lg overflow-hidden shadow-md md:py-6`}
                            style={{
                                marginRight: windowWidth >= 700 ? index * 30 : 0,
                                marginLeft: windowWidth >= 700 ? `-${index * 30}px` : 0,
                                background: 'linear-gradient(108deg, #FFF 70.52%, #D9FFC8 101.01%)'
                            }}
                        >
                            {/* Side label */}
                            <div className=" flex items-center justify-center">
                                <div className="transform -rotate-90 whitespace-nowrap text-primary text-xs font-bold border-b-2 pb-4">
                                    {feature.sideName}
                                </div>
                            </div>

                            {/* Content section */}
                            <div className="flex-1 p-5 bg-gradient-to-r  rounded-r-lg flex items-center gap-2">
                                <div>
                                    <h3 className="text-lg font-semibold text-secondary mb-1">{feature.title}</h3>
                                    <p className="text-gray-700 text-sm">{feature.description}</p>
                                </div>

                                {feature.icons && (
                                    <div className="flex space-x-2 mt-2">
                                        {feature.icons.map(icon => (
                                            <Image key={icon} src={icon} alt='logo' width={50} height={50} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right side: Images and Media Logos */}
                <div className="space-y-8">
                    {/* Team Images */}
                    <div className="grid grid-cols-2 gap-4">
                        {ceoImages.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                                viewport={{ once: true }}
                                className="rounded-lg overflow-hidden shadow-md flex items-center flex-col gap-2"
                            >
                                <div className="aspect-[227.00/136.94] relative">
                                    <Image
                                        src={image}
                                        alt="Team member"
                                        className=""
                                        height={150}
                                        width={227}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 p-4 text-center max-w-[250px]">Lorem ipsum dolor sit amet consectetur</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Media Logos */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-6 mt-12"
                    >
                        <Image src={'/dfi/brands.webp'} alt='brands logo' width={400} height={300} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default WhyRightMatchSection;

const ceoImages = [
    '/dfi/ceo1.webp',
    '/dfi/ceo2.webp',
    '/dfi/ceo3.webp',
    '/dfi/ceo4.webp',
];
