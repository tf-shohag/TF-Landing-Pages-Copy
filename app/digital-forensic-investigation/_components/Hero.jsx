'use client';
import { Star } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Script from 'next/script'
import Button from './Button';

const Hero = () => {
    const mobileFormRef = useRef(null);
    const desktopFormRef = useRef(null);

    useEffect(() => {
        // Function to create and append the script
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
    }, []);

    return (
        <div className='min-h-[800px] flex items-center justify-center'
            style={{
                background: "url(./dfi/hero.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >
            <div className='flex items-center justify-between gap-4 container mx-auto'>
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='flex flex-col gap-4 bg-[#364a5d] rounded-md p-4 md:p-8 bg-opacity-70 max-w-[950px]'
                >
                    <h1 className='text-4xl md:text-5xl leading-snug font-bold text-white text-center md:text-left'>Uncover the Truth with Expert <span className='text-primary'>Digital Forensic Investigation</span></h1>
                    <p className='text-white text-lg'>When cyber threats strike, fraud occurs, or data is compromised, you need undeniable evidence. Our expert digital forensic team uncovers hidden data, traces cybercriminals, and secures digital proof for legal proceedings.</p>

                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className='md:hidden h-full'
                    >
                        {/* Mobile Bitrix24 form container */}
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

                    <div className='flex  flex-col items-center justify-center md:justify-start w-full md:w-fit gap-2'>
                        <Button className='py-4 px-8  font-semibold rounded-md w-fit md:text-xl mt-6'>Need answers? Let's investigate  🚀</Button>
                        <small className='text-white mb-4 text-center'>Get a Free Consultation</small>
                    </div>

                    <div className='flex items-center flex-col md:flex-row gap-4 text-white'>
                        <div className='flex items-center gap-6 bg-[#74818d] bg-opacity-70  p-4 rounded-md'>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                                        <g clipPath="url(#clip0_259_2334)">
                                            <path d="M21.3737 5.25952H2.03745C1.57801 5.25952 1.20557 5.63197 1.20557 6.0914V20.13C1.20557 20.5895 1.57801 20.9619 2.03745 20.9619H21.3737C21.8331 20.9619 22.2056 20.5895 22.2056 20.13V6.0914C22.2056 5.63197 21.8331 5.25952 21.3737 5.25952Z" fill="#4989F5" />
                                            <path d="M21.131 5.14154H2.25691C1.67225 5.14154 1.21729 9.66635 1.21729 10.251L11.5533 20.9619H21.131C21.7174 20.9603 22.1924 20.4853 22.1941 19.8988V6.2044C22.1923 5.61802 21.7173 5.14314 21.131 5.14154Z" fill="url(#paint0_linear_259_2334)" />
                                            <path d="M6.00049 7.88917H12.0005V0.0142822H6.89891L6.00049 7.88917Z" fill="#3C4BA6" />
                                            <path d="M18.0005 7.88917H12.0005V0.0142822H17.1021L18.0005 7.88917ZM22.2055 1.50706L22.2129 1.53391C22.2111 1.52443 22.2075 1.51564 22.2055 1.50706Z" fill="#7BABF7" />
                                            <path d="M22.2129 1.53366L22.2054 1.50682C22.0152 0.63576 21.2442 0.014602 20.3527 0.0140381H17.1021L17.9998 7.88915H23.9998L22.2129 1.53366Z" fill="#3F51B5" />
                                            <path d="M1.79553 1.50702L1.78809 1.53435C1.78989 1.5247 1.7935 1.51575 1.79553 1.50702Z" fill="#7BABF7" />
                                            <path d="M1.78805 1.53366L1.79549 1.50682C1.98571 0.63576 2.75668 0.014602 3.64827 0.0140381H6.8991L6 7.88915H0L1.78805 1.53366Z" fill="#7BABF7" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.01078 7.88708C6.01078 9.54299 4.66838 10.8854 3.01247 10.8854C1.35656 10.8854 0.0141602 9.54299 0.0141602 7.88708H6.01078Z" fill="#709BE0" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12.0074 7.88708C12.0074 9.54299 10.665 10.8854 9.00905 10.8854C7.35314 10.8854 6.01074 9.54299 6.01074 7.88708H12.0074Z" fill="#3C4BA6" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M18.0039 7.88708C18.0039 9.54299 16.6615 10.8854 15.0056 10.8854C13.3497 10.8854 12.0073 9.54299 12.0073 7.88708H18.0039Z" fill="#709BE0" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M24 7.88708C24 9.54299 22.6576 10.8854 21.0017 10.8854C19.3458 10.8854 18.0034 9.54299 18.0034 7.88708H24Z" fill="#3C4BA6" />
                                            <path d="M21.0017 16.0103C20.9911 15.8676 20.9735 15.7372 20.9485 15.5707H17.6778C17.6778 16.0282 17.6778 16.5273 17.676 16.985H19.5707C19.5305 17.1983 19.4485 17.4015 19.3295 17.583C19.2104 17.7646 19.0567 17.9208 18.8771 18.0427C18.8771 18.0427 18.8771 18.0348 18.8758 18.0346C18.6439 18.1868 18.3826 18.2888 18.1089 18.3339C17.8344 18.3841 17.553 18.3829 17.279 18.3303C17.0008 18.2727 16.7374 18.1585 16.5051 17.9949C16.1623 17.7518 15.8979 17.4139 15.7443 17.0227C15.7325 16.9922 15.7217 16.9616 15.7107 16.9304V16.927L15.7136 16.9248C15.5645 16.4873 15.5641 16.0128 15.7125 15.575C15.8169 15.2679 15.9889 14.9881 16.2157 14.7562C16.7477 14.2059 17.5427 13.9989 18.2755 14.2198C18.5566 14.306 18.8133 14.4572 19.0251 14.661L19.6643 14.0218C19.7771 13.9079 19.8942 13.7976 20.0027 13.6798C19.6786 13.3775 19.2981 13.1419 18.883 12.9864C18.1275 12.7125 17.3011 12.7053 16.541 12.9659C16.5145 12.9749 16.4882 12.9843 16.462 12.9941C15.6419 13.3024 14.9673 13.907 14.5713 14.6885C14.4315 14.9652 14.3297 15.2594 14.2686 15.5633C13.9066 17.3626 15.0045 19.1338 16.7771 19.6099C17.3566 19.7651 17.9726 19.7613 18.5566 19.6286C19.0872 19.5088 19.5778 19.2539 19.9808 18.8885C20.4013 18.5017 20.7026 17.9863 20.8605 17.4388C20.9925 16.9749 21.0403 16.4911 21.0017 16.0103Z" fill="white" />
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear_259_2334" x1="1.21729" y1="7351.11" x2="22320.3" y2="7351.11" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.03" stopColor="#4079D8" />
                                                <stop offset="1" stopColor="#4989F5" />
                                            </linearGradient>
                                            <clipPath id="clip0_259_2334">
                                                <rect width="24" height="20.976" fill="white" />
                                            </clipPath>
                                        </defs>
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
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='hidden md:block h-full'
                >
                    {/* Desktop Bitrix24 form container */}
                    <div className='hidden md:block' ref={desktopFormRef}></div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero