'use client';
import { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="mb-4 ">
      <div 
        className={`flex justify-between items-center cursor-pointer py-4 border-b border-gray-200 pb-4 bg-gray-50 rounded-t-lg p-4 ${isOpen && 'border-b-2 border-b-secondary '}`}
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-semibold text-secondary">{question}</h3>
        <button className="text-2xl">
          {isOpen ? '−' : '+'}
        </button>
      </div>
      {isOpen && (
        <div className="py-2 text-gray-700 mx-4 p-4 bg-gray-100">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is my case confidential?",
      answer: "Yes, we handle every case with strict confidentiality and discretion."
    },
    {
      question: "Can you recover deleted files?",
      answer: "Yes, we specialize in advanced data recovery, including permanently deleted data."
    },
    {
      question: "Will the forensic report be valid in court?",
      answer: "Absolutely. Our reports follow legal standards and are admissible in court."
    },
    {
      question: "How long does a forensic investigation take?",
      answer: " It depends on the complexity of the case, but we act as fast as possible."
    },
    {
      question: "Can you help with cybersecurity after the investigation?",
      answer: " Yes, we offer security solutions to prevent future attacks."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-secondary">FREQUENTLY ASKED </span>
          <span className="text-primary">QUESTIONS</span>
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Find answers to common questions about recovering from crypto scams. Learn the essential 
          steps, how to secure your assets, and how expert help can make a difference.
        </p>
      </div>

      <div className="">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={index === openIndex}
            toggleOpen={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;