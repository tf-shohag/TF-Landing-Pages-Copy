'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description, index }) => {
    const isTopRow = index < 3;

    return (
        <motion.div
            initial={{ y: isTopRow ? -100 : 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-100 p-6 rounded-lg relative"
        >
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                className="text-green-500 mb-4"
            >
                {icon}
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
};

const ServicesSection = () => {
    const services = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
                    <mask id="mask0_262_2427"  maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="61">
                        <rect y="0.5" width="60" height="60" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_262_2427)">
                        <path d="M51.5 53.4166L39.75 41.6666C38.0417 43 36.1562 44.0416 34.0937 44.7916C32.0312 45.5416 29.8333 45.9166 27.5 45.9166C23.75 45.9166 20.3646 45 17.3438 43.1666C14.3229 41.3333 11.9375 38.9166 10.1875 35.9166H16.3125C17.7292 37.4583 19.3854 38.677 21.2813 39.5729C23.1771 40.4687 25.25 40.9166 27.5 40.9166C31.6667 40.9166 35.2083 39.4583 38.125 36.5416C41.0417 33.625 42.5 30.0833 42.5 25.9166C42.5 21.75 41.0417 18.2083 38.125 15.2916C35.2083 12.375 31.6667 10.9166 27.5 10.9166C23.5833 10.9166 20.1979 12.2395 17.3438 14.8854C14.4896 17.5312 12.8958 20.7916 12.5625 24.6666H7.5625C7.89583 19.375 9.96875 14.927 13.7813 11.3229C17.5938 7.71871 22.1667 5.91663 27.5 5.91663C33.0833 5.91663 37.8125 7.85413 41.6875 11.7291C45.5625 15.6041 47.5 20.3333 47.5 25.9166C47.5 28.25 47.125 30.4479 46.375 32.5104C45.625 34.5729 44.5833 36.4583 43.25 38.1666L55 49.9166L51.5 53.4166ZM24.8125 35.9166L20.875 22.9166L17.625 32.1666H5V28.4166H15L19.125 16.5416H22.875L26.6875 29.2916L29.375 20.9166H33.125L36.875 28.4166H38.75V32.1666H34.5625L31.625 26.2916L28.5 35.9166H24.8125Z" fill="#5BBC2E" />
                    </g>
                </svg>
            ),
            title: "Cybercrime Investigation",
            description: "Hacking, data theft, or cyber fraud."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
                    <mask id="mask0_262_2434"  maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="61">
                        <rect y="0.5" width="60" height="60" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_262_2434)">
                        <path d="M30 55.5C24.2083 54.0417 19.4271 50.7188 15.6563 45.5313C11.8854 40.3438 10 34.5833 10 28.25V13L30 5.5L50 13V28.25C50 31.7917 49.3958 35.1979 48.1875 38.4688C46.9792 41.7396 45.25 44.625 43 47.125L35 39.125C34.25 39.5833 33.4479 39.9271 32.5938 40.1563C31.7396 40.3854 30.875 40.5 30 40.5C27.25 40.5 24.8958 39.5208 22.9375 37.5625C20.9792 35.6042 20 33.25 20 30.5C20 27.75 20.9792 25.3958 22.9375 23.4375C24.8958 21.4792 27.25 20.5 30 20.5C32.75 20.5 35.1042 21.4792 37.0625 23.4375C39.0208 25.3958 40 27.75 40 30.5C40 31.4167 39.8854 32.3021 39.6563 33.1562C39.4271 34.0104 39.0833 34.8333 38.625 35.625L42.375 39.375C43.2083 37.6667 43.8542 35.875 44.3125 34C44.7708 32.125 45 30.2083 45 28.25V16.4375L30 10.8125L15 16.4375V28.25C15 33.2917 16.4167 37.875 19.25 42C22.0833 46.125 25.6667 48.875 30 50.25C31.0833 49.9167 32.1146 49.4896 33.0938 48.9688C34.0729 48.4479 35.0417 47.8333 36 47.125L39.5 50.625C38.125 51.75 36.6354 52.7292 35.0312 53.5625C33.4271 54.3958 31.75 55.0417 30 55.5ZM30 35.5C31.375 35.5 32.5521 35.0104 33.5313 34.0313C34.5104 33.0521 35 31.875 35 30.5C35 29.125 34.5104 27.9479 33.5313 26.9688C32.5521 25.9896 31.375 25.5 30 25.5C28.625 25.5 27.4479 25.9896 26.4688 26.9688C25.4896 27.9479 25 29.125 25 30.5C25 31.875 25.4896 33.0521 26.4688 34.0313C27.4479 35.0104 28.625 35.5 30 35.5Z" fill="#5BBC2E" />
                    </g>
                </svg>
            ),
            title: "Legal & Corporate Cases",
            description: "Digital evidence for lawsuits, fraud, or internal investigations."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
                    <mask id="mask0_262_2441"  maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="61">
                        <rect y="0.5" width="60" height="60" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_262_2441)">
                        <path d="M12.5 53C11.125 53 9.94792 52.5104 8.96875 51.5313C7.98958 50.5521 7.5 49.375 7.5 48V13C7.5 11.625 7.98958 10.4479 8.96875 9.46875C9.94792 8.48958 11.125 8 12.5 8H47.5C48.875 8 50.0521 8.48958 51.0313 9.46875C52.0104 10.4479 52.5 11.625 52.5 13V48C52.5 49.375 52.0104 50.5521 51.0313 51.5313C50.0521 52.5104 48.875 53 47.5 53H12.5ZM12.5 21.3125H47.5V13H12.5V21.3125ZM12.5 34.6875H47.5V26.3125H12.5V34.6875ZM12.5 48H47.5V39.6875H12.5V48ZM15 19.625V14.625H20V19.625H15ZM15 33V28H20V33H15ZM15 46.375V41.375H20V46.375H15Z" fill="#5BBC2E" />
                    </g>
                </svg>
            ),
            title: "Data Recovery & Analysis",
            description: "Retrieving lost, deleted, or encrypted data."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
                    <mask id="mask0_262_2448"  maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="61">
                        <rect y="0.5" width="60" height="60" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_262_2448)">
                        <path d="M50 28.4167C49.2917 28.4167 48.6979 28.1771 48.2187 27.6979C47.7396 27.2188 47.5 26.625 47.5 25.9167C47.5 25.2083 47.7396 24.6146 48.2187 24.1354C48.6979 23.6563 49.2917 23.4167 50 23.4167C50.7083 23.4167 51.3021 23.6563 51.7812 24.1354C52.2604 24.6146 52.5 25.2083 52.5 25.9167C52.5 26.625 52.2604 27.2188 51.7812 27.6979C51.3021 28.1771 50.7083 28.4167 50 28.4167ZM47.5 20.9167V8.41667H52.5V20.9167H47.5ZM22.5 30.9167C19.75 30.9167 17.3958 29.9375 15.4375 27.9792C13.4792 26.0208 12.5 23.6667 12.5 20.9167C12.5 18.1667 13.4792 15.8125 15.4375 13.8542C17.3958 11.8958 19.75 10.9167 22.5 10.9167C25.25 10.9167 27.6042 11.8958 29.5625 13.8542C31.5208 15.8125 32.5 18.1667 32.5 20.9167C32.5 23.6667 31.5208 26.0208 29.5625 27.9792C27.6042 29.9375 25.25 30.9167 22.5 30.9167ZM2.5 50.9167V43.9167C2.5 42.5 2.86458 41.1979 3.59375 40.0104C4.32292 38.8229 5.29167 37.9167 6.5 37.2917C9.08333 36 11.7083 35.0313 14.375 34.3854C17.0417 33.7396 19.75 33.4167 22.5 33.4167C25.25 33.4167 27.9583 33.7396 30.625 34.3854C33.2917 35.0313 35.9167 36 38.5 37.2917C39.7083 37.9167 40.6771 38.8229 41.4062 40.0104C42.1354 41.1979 42.5 42.5 42.5 43.9167V50.9167H2.5ZM7.5 45.9167H37.5V43.9167C37.5 43.4583 37.3854 43.0417 37.1562 42.6667C36.9271 42.2917 36.625 42 36.25 41.7917C34 40.6667 31.7292 39.8229 29.4375 39.2604C27.1458 38.6979 24.8333 38.4167 22.5 38.4167C20.1667 38.4167 17.8542 38.6979 15.5625 39.2604C13.2708 39.8229 11 40.6667 8.75 41.7917C8.375 42 8.07292 42.2917 7.84375 42.6667C7.61458 43.0417 7.5 43.4583 7.5 43.9167V45.9167ZM22.5 25.9167C23.875 25.9167 25.0521 25.4271 26.0312 24.4479C27.0104 23.4688 27.5 22.2917 27.5 20.9167C27.5 19.5417 27.0104 18.3646 26.0312 17.3854C25.0521 16.4063 23.875 15.9167 22.5 15.9167C21.125 15.9167 19.9479 16.4063 18.9687 17.3854C17.9896 18.3646 17.5 19.5417 17.5 20.9167C17.5 22.2917 17.9896 23.4688 18.9687 24.4479C19.9479 25.4271 21.125 25.9167 22.5 25.9167Z" fill="#5BBC2E" />
                    </g>
                </svg>
            ),
            title: "Social Media & Online Harassment",
            description: "Gathering evidence for legal action."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <mask id="mask0_262_2455"  maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">
                        <rect width="60" height="60" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_262_2455)">
                        <path d="M12.5 55.4167C11.125 55.4167 9.94792 54.9271 8.96875 53.9479C7.98958 52.9688 7.5 51.7917 7.5 50.4167V40.4167C7.5 39.0417 7.98958 37.8646 8.96875 36.8854C9.94792 35.9063 11.125 35.4167 12.5 35.4167H47.5C48.875 35.4167 50.0521 35.9063 51.0313 36.8854C52.0104 37.8646 52.5 39.0417 52.5 40.4167V50.4167C52.5 51.7917 52.0104 52.9688 51.0313 53.9479C50.0521 54.9271 48.875 55.4167 47.5 55.4167H12.5ZM12.5 50.4167H47.5V40.4167H12.5V50.4167ZM16.3125 31.6667L3.75 24.5417L18.75 22.0417L14.6875 7.35417L27.125 16.1667L34.625 2.91667L37.125 17.9167L51.8125 13.8542L43 26.2917L52.5 31.6667H42.375L35.75 27.9167L39.625 22.4167L33.125 24.2292L32 17.6042L28.75 23.4167L23.25 19.5417L25.0625 26.0417L18.4375 27.1667L25.9375 31.6667H16.3125Z" fill="#5BBC2E" />
                    </g>
                </svg>
            ),
            title: "Insider Threat Detection",
            description: "Investigating unauthorized access or data leaks."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <mask id="mask0_262_2462"  maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">
                        <rect width="60" height="60" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_262_2462)">
                        <path d="M27.375 38.875L41.5 24.75L37.9375 21.1875L27.375 31.75L22.125 26.5L18.5625 30.0625L27.375 38.875ZM30 55C24.2083 53.5417 19.4271 50.2188 15.6563 45.0313C11.8854 39.8438 10 34.0833 10 27.75V12.5L30 5L50 12.5V27.75C50 34.0833 48.1146 39.8438 44.3438 45.0313C40.5729 50.2188 35.7917 53.5417 30 55ZM30 49.75C34.3333 48.375 37.9167 45.625 40.75 41.5C43.5833 37.375 45 32.7917 45 27.75V15.9375L30 10.3125L15 15.9375V27.75C15 32.7917 16.4167 37.375 19.25 41.5C22.0833 45.625 25.6667 48.375 30 49.75Z" fill="#5BBC2E" />
                    </g>
                </svg>
            ),
            title: "Digital Evidence Validation",
            description: "Authenticating emails, messages, images, and documents."
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold mb-4">
                    <span className="text-primary">DO YOU NEED</span>{" "}
                    <span className="text-navy-900">DIGITAL FORENSIC INVESTIGATION?</span>
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Digital forensics is crucial for legal cases, fraud investigations, cybersecurity breaches, and
                    personal matters. If you're facing any of the following situations, we can help:
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;