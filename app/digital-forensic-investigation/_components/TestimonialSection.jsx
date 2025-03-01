// TestimonialSection.jsx
"use client";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    content: "The guys in the team are extremely efficient and very humble. Kept me posted and helped me learn about lots of security related things. I never needed to do pen-testing. It really is an effective tool for companies like ours. If you are looking for reliability, Techforing is a Go-to! Try them! ",
    name: "ERIC HO",
    location: "Staff Software Engineer, RippleMatch ( ECUADOR )",
    image: "/dfi/eric-ho.webp"
  },
  {
    id: 2,
    content: "One of my crucial websites was showing ominous signs. We were being suspicious. Thankfully, we didn’t waste time and immediately asked my subordinate to look for somebody. He got us with Techforing. They did a thorough job and made some recommendations. I will definitely work with them again. As he pointed at security holes, no other tech had pointed out before. Thank you, Techforing!",
    name: "ISRAEL SANCHEZ...",
    location: "CEO, Integrated Healing and Strength Systems, Inc. ( USA )",
    image: "/dfi/israel-sunchez.webp"
  },
  {
    id: 3,
    content: "Our website needed a risk assessment. TechForing Engineers are a pro in that. They did everything needed to get the job done. Guys are content and I got my peace of mind. Thanks TechForing. ",
    name: "EDDIE MURGIC",
    location: "President and CEO, Traveloko, LLC. ( USA )",
    image: "/dfi/murgic.webp"
  }
];

const TestimonialCard = ({ testimonial, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={cardRef}
      className={`max-w-sm bg-white p-6 rounded-lg shadow-md relative ${index === 1 ? "md:mt-12" : 'md:-mt-12'}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <p className="text-gray-700 mb-6">{testimonial.content}</p>
      <div className="flex items-center">
        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
          <p className="text-gray-500 text-sm">{testimonial.location}</p>
        </div>
      </div>
    </motion.div>
  );
};


const TestimonialSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="py-16  bg-gray-50 relative mx-auto" style={{
        background : "url(/dfi/success.webp)",
        backgroundSize : 'cover'
    }}>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-secondary">CLIENT SUCCESS STORIES</h2>
          <p className="text-secondary">What our customers are saying</p>
        </motion.div>

        <div className=" flex items-center justify-center flex-wrap gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;