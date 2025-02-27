// TestimonialSection.jsx
"use client";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    content: "These are some super talented bunch of people! Though costly, they managed to help me bypass the URLs anti-virus was constantly flagging. I really needed those URLs operational. At first I was not sure whether the price was worth it. Thankfully I went on with it. and they didnt disappoint.",
    name: "First Last",
    location: "Location, Company",
    image: "/avatar1.jpg"
  },
  {
    id: 2,
    content: "Wanted to find out about all my digital trace and remove any personal information that is out there. They got me what I needed. Dont know how they did it. But they managed to gather some vital intelligence. Surely, it's not the 1st time I will be hiring them. Gotta work together again soon!",
    name: "First Last",
    location: "Location, Company",
    image: "/avatar2.jpg"
  },
  {
    id: 3,
    content: "My cryptocurrency got stolen despite it's deemed to be pretty secure. I can understand things happen! Tried law enforcement but got no help, then hired the Techforing team to get my funds back. They traced back the hacker and forced him return the cash with the same value of lost crypto. Excellent job indeed!",
    name: "First Last",
    location: "Location, Company",
    image: "/avatar3.jpg"
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