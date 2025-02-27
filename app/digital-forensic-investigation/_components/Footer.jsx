import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

const Footer = () => {
  return (
    <>
      <Head>
        <title>Footer | TechForing</title>
      </Head>

      {/* Bitrix24 Script */}
      {/* <Script
        strategy="lazyOnload"
        src="https://cdn.bitrix24.com/b15773863/crm/site_button/loader_310_wozrt0.js"
      /> */}

      <footer className="w-full border-t-2 border-t-secondary">
        {/* Certifications Section */}
        <div className="flex justify-center items-center py-4 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              <Image src={'/dfi/f-logo.webp'} alt='footer logo' width={1000} height={200} />
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="bg-white py-6">
          <div className="container mx-auto px-4 border-t-2 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-4">
              {/* Logo Section */}
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/logo.svg"
                  alt="TechForing Logo"
                  width={250}
                  height={100}
                  className="h-auto"
                />
              </div>

              {/* Business Details */}
              <div className="text-center">
                <div className="flex justify-center items-center text-primary mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-medium">BUSINESS DETAILS</h3>
                </div>
                <p className="text-secondary mb-1">Business Name: TechForing LLC.</p>
                <p className="text-secondary mb-1">Company No: 802448332</p>
                <p className="text-secondary mb-1">License Provided by : Michigan Department of</p>
                <p className='text-secondary'>Licensing and regulatory Affairs</p>
              </div>

              {/* Location */}
              <div className="text-center">
                <div className="flex justify-center items-center text-primary mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-lg font-medium text-primary">LOCATION</h3>
                </div>
                <p className='text-secondary'>96 west 15th, Suite 205, Holland, Michigan, 49423, USA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="bg-secondary text-white py-3">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-auto mr-4">
                <span className="font-bold">Legal Disclaimer:</span>
              </div>
              <div className="flex-1">
                <p className="text-gray-200 text-sm">
                  This page is for informational purposes only. TechForing follows legal and ethical procedures in digital forensic investigations. We do not engage in illegal hacking, unauthorized access, or unethical activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
