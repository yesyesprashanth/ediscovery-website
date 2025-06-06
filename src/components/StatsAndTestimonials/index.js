'use client';

import { useState } from 'react';
import Image from 'next/image';

const StatsAndTestimonials = () => {
  // Stats data
  const stats = [
    {
      id: 1,
      value: '500+',
      label: 'Labs Empowered',
      icon: (
        <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      ),
    },
    {
      id: 2,
      value: '10+',
      label: 'Years of Excellence',
      icon: (
        <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
    },
    {
      id: 3,
      value: '1000+',
      label: 'Installations Completed',
      icon: (
        <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
    },
    {
      id: 4,
      value: '20+',
      label: 'Cities Served in India',
      icon: (
        <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "eDiscovery Automation has transformed our laboratory operations. Their liquid handling systems have increased our throughput by 40% while reducing manual errors significantly.",
      author: "Dr. Amit Sharma",
      title: "Lab Director, National Research Institute",
      image: "/placeholder-avatar.png",
      type: "customer"
    },
    {
      id: 2,
      quote: "As a research facility, we needed flexible automation solutions that could adapt to our changing protocols. The team at eDiscovery understood our needs perfectly and provided customized solutions.",
      author: "Dr. Priya Patel",
      title: "Head of Research, BioTech Solutions",
      image: "/placeholder-avatar.png",
      type: "customer"
    },
    {
      id: 3,
      quote: "Their technical support is exceptional. From installation to training and ongoing maintenance, eDiscovery has been a reliable partner for our diagnostic lab.",
      author: "Rajesh Kumar",
      title: "Operations Manager, Clinical Diagnostics Center",
      image: "/placeholder-avatar.png",
      type: "customer"
    },
    {
      id: 4,
      quote: "As a principal partner, we've been impressed by eDiscovery Automation's market knowledge and distribution capabilities in India. They've helped us reach laboratories we couldn't have accessed otherwise.",
      author: "Johannes Schmidt",
      title: "VP of Global Distribution, German Lab Systems GmbH",
      image: "/placeholder-avatar.png",
      type: "principal"
    }
  ];
  
  // State for active testimonial
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Pagination for testimonials
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="stats-testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Impact in Numbers</h2>
          <p className="text-xl text-sky-600 max-w-3xl mx-auto mb-10">
            Trusted by Labs, Endorsed by Experts
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">What Our Clients Say</h2>
          
          <div className="relative">
            {/* Testimonial */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {/* This will be replaced with an actual image later */}
                  <div className="bg-gray-200 rounded-full h-16 w-16 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Photo</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonials[activeTestimonial].author}</h3>
                  <p className="text-gray-600">{testimonials[activeTestimonial].title}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    testimonials[activeTestimonial].type === 'customer' 
                      ? 'bg-sky-100 text-sky-800' 
                      : 'bg-maroon-600 bg-opacity-10 text-maroon-600'
                  }`}>
                    {testimonials[activeTestimonial].type === 'customer' ? 'Customer' : 'Principal Partner'}
                  </span>
                </div>
              </div>
              
              <blockquote className="text-gray-700 italic border-l-4 border-sky-500 pl-4 py-2">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>
            </div>
            
            {/* Navigation controls */}
            <div className="flex justify-between items-center">
              <button 
                onClick={prevTestimonial} 
                className="bg-white rounded-full h-10 w-10 flex items-center justify-center shadow-md hover:bg-gray-50"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              
              {/* Pagination indicators */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-3 w-3 rounded-full ${
                      activeTestimonial === index ? 'bg-sky-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial} 
                className="bg-white rounded-full h-10 w-10 flex items-center justify-center shadow-md hover:bg-gray-50"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <a href="/testimonials" className="text-sky-600 font-medium hover:text-sky-700 flex items-center justify-center">
              See All Testimonials
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsAndTestimonials;