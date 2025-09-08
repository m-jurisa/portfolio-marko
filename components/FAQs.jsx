"use client";

import { useState } from 'react';

export default function FAQs({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!items.length) return null;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="c-space my-16">
      <div className="mb-8">
        <h3 className="grid-headtext mb-4">Häufige Fragen</h3>
        <p className="grid-subtext max-w-2xl">
          Die wichtigsten Antworten zu Ablauf, Kosten und Zusammenarbeit.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-4">
        {items.map((faq, index) => (
          <div 
            key={index} 
            className="group grid-container hover:border-purple-500/30 transition-all duration-300 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between text-left focus:outline-none"
              aria-expanded={openIndex === index}
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors duration-300"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15.75h7.5" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold text-lg group-hover:text-purple-300 transition-colors duration-300">
                  {faq.q}
                </h4>
              </div>
              
              <div className="flex-shrink-0 ml-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className={`w-5 h-5 text-purple-400 transition-all duration-300 ${
                    openIndex === index ? 'rotate-180 text-purple-300' : 'group-hover:text-purple-300'
                  }`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index 
                  ? 'max-h-96 opacity-100 mt-4' 
                  : 'max-h-0 opacity-0 mt-0'
              }`}
            >
              <div className="px-11 pb-2">
                <div className="px-4 py-3 rounded-lg bg-black-200/30 border border-black-100/50">
                  <p className="grid-subtext text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
