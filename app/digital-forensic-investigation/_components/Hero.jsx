'use client';
import { Star } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { motion, LazyMotion, domAnimation } from 'framer-motion'
import Button from './Button';
import Image from 'next/image';

const Hero = () => {
    const mobileFormRef = useRef(null);
    const desktopFormRef = useRef(null);

    useEffect(() => {
        // Defer Bitrix24 form loading for better initial page performance
        const timer = setTimeout(() => {
            const appendScript = (container) => {
                if (!container) return;
                
                // Clear any previous script
                const existingScript = container.querySelector('[data-b24-form]');
                if (existingScript) {
                    existingScript.remove();
                }

                // Create and append the Bitrix24 script
                const script = document.createElement('script');
                script.id = 'bitrix-form-loader';
                script.async = true;
                script.src = 'https://cdn.bitrix24.com/b15773863/crm/form/loader_780.js?' + (Date.now() / 180000 | 0);
                script.setAttribute('data-b24-form', 'inline/780/626wsm');
                script.setAttribute('data-skip-moving', 'true');

                // Append to the container
                container.appendChild(script);
            };

            // Apply to both containers
            if (typeof window !== 'undefined') {
                appendScript(mobileFormRef.current);
                appendScript(desktopFormRef.current);
            }
        }, 1000); // Delay form loading by 1 second

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='min-h-[800px] flex items-center justify-center relative'>
            {/* Preload hero image with priority */}
            <Image 
                src="/dfi/hero.webp"
                alt="Digital Forensic Investigation Background"
                fill
                priority
                quality={80}
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    zIndex: -1
                }}
            />
            
            <div className='flex items-center justify-between gap-4 container mx-auto'>
                <LazyMotion features={domAnimation}>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className='flex flex-col gap-4 bg-[#364a5d] rounded-md p-4 md:p-8 bg-opacity-70 max-w-[950px]'
                    >
                        <h1 className='text-4xl md:text-5xl leading-snug font-bold text-white text-center md:text-left'>Uncover the Truth with Expert <span className='text-primary'>Digital Forensic Investigation</span></h1>
                        <p className='text-white text-lg'>When cyber threats strike, fraud occurs, or data is compromised, you need undeniable evidence. Our expert digital forensic team uncovers hidden data, traces cybercriminals, and secures digital proof for legal proceedings.</p>

                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                            className='md:hidden h-full'
                        >
                            <div className='' ref={mobileFormRef}></div>
                        </motion.div>

                        <ul className='list-disc flex items-center justify-center md:justify-start gap-4 text-primary px-4 font-semibold'>
                            <li className=''>Fast</li>
                            <li className='ml-4'>Confidential</li>
                            <li className='ml-4'>Court-Admissible</li>
                        </ul>

                        <div className='flex items-center justify-center md:justify-start flex-wrap gap-4 relative mt-4 text-sm md:text-base'>
                            <p className='absolute -top-[30px] left-80 md:left-0 text-4xl'>📌</p>
                            <p className='text-white border border-primary px-4 py-1 font-medium rounded-2xl'>Data Breaches</p>
                            <p className='text-white border border-primary px-4 py-1 font-medium rounded-2xl'>Fraud Investigations</p>
                            <p className='text-white border border-primary px-4 py-1 font-medium rounded-2xl'>Cybercrime Analysis</p>
                            <p className='text-white border border-primary px-4 py-1 font-medium rounded-2xl'>Incident Response</p>
                        </div>

                        <div className='flex flex-col items-center justify-center md:justify-start w-full md:w-fit gap-2'>
                            <Button className='py-4 px-8 font-semibold rounded-md w-fit md:text-xl mt-6'>Need answers? Let's investigate  🚀</Button>
                            <small className='text-white mb-4 text-center'>Get a Free Consultation</small>
                        </div>

                        <div className='flex items-center flex-col md:flex-row gap-4 text-white'>
                            <div className='flex items-center gap-6 bg-[#74818d] bg-opacity-70 p-4 rounded-md'>
                                <div>
                                    <div className='flex items-center gap-2 text-2xl font-semibold'>
                                        <Star className='fill-green-500 stroke-green-500' size={30} />
                                        <h3>Trustpilot</h3>
                                    </div>
                                    <div className='flex items-center flex-col md:flex-row gap-2 mt-2 text-sm whitespace-nowrap'>
                                        <div>
                                            TrustScore <span className='font-bold'>4.5</span>
                                        </div>
                                        <div>
                                            <span className='font-bold'>1,204 </span>
                                            reviews
                                        </div>
                                    </div>
                                </div>
                                <p className='max-w-[200px] text-sm font-light'>Lorem ipsum dolor sit amet consectetur. Diam at cras nunc turpis. Vel orci odio sit vitae morbi.</p>
                            </div>

                            <div className='flex items-center gap-6 bg-[#74818d] bg-opacity-70 p-4 rounded-md'>
                                <div>
                                    <div className='flex items-center gap-2 text-2xl font-semibold'>
                                        {/* Simplified Google SVG icon for better performance */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                                            <path d="M21.3737 5.25952H2.03745C1.57801 5.25952 1.20557 5.63197 1.20557 6.0914V20.13C1.20557 20.5895 1.57801 20.9619 2.03745 20.9619H21.3737C21.8331 20.9619 22.2056 20.5895 22.2056 20.13V6.0914C22.2056 5.63197 21.8331 5.25952 21.3737 5.25952Z" fill="#4989F5" />
                                            <path d="M21.131 5.14154H2.25691C1.67225 5.14154 1.21729 9.66635 1.21729 10.251L11.5533 20.9619H21.131C21.7174 20.9603 22.1924 20.4853 22.1941 19.8988V6.2044C22.1923 5.61802 21.7173 5.14314 21.131 5.14154Z" fill="#4989F5" />
                                            <path d="M6.00049 7.88917H12.0005V0.0142822H6.89891L6.00049 7.88917Z" fill="#3C4BA6" />
                                        </svg>
                                        <h3>Google</h3>
                                    </div>
                                    <div className='flex items-center ga mt-2'>
                                        <Star className='fill-yellow-500 stroke-yellow-500' />
                                        <Star className='fill-yellow-500 stroke-yellow-500' />
                                        <Star className='fill-yellow-500 stroke-yellow-500' />
                                        <Star className='fill-yellow-500 stroke-yellow-500' />
                                        <Star className='fill-yellow-500 stroke-yellow-500' />
                                    </div>
                                </div>
                                <p className='max-w-[200px] text-sm font-light'>Lorem ipsum dolor sit amet consectetur. Diam at cras nunc turpis. Vel orci odio sit vitae morbi.</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                        className='hidden md:block h-full'
                    >
                        <div className='hidden md:block' ref={desktopFormRef}></div>
                    </motion.div>
                </LazyMotion>
            </div>
        </div>
    )
}

export default Hero