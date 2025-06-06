'use client';

import Image from 'next/image';
import Link from 'next/link';

const Principals = () => {
  // This is dummy data for the principals that can be replaced later
  const principals = [
    {
      id: 1,
      name: "German Lab Systems GmbH",
      country: "Germany",
      description: "Industry leader in precision lab automation systems with over 30 years of excellence in engineering high-quality analytical instruments.",
      expertise: ["Liquid Handling", "Sample Management", "Analytical Systems"],
      logo: "/placeholder-logo.png"
    },
    {
      id: 2,
      name: "US BioTech Solutions",
      country: "United States",
      description: "Pioneering biotech automation company specializing in cutting-edge robotics and AI-driven solutions for modern laboratories.",
      expertise: ["Robotic Automation", "AI Analytics", "Workflow Optimization"],
      logo: "/placeholder-logo.png"
    },
    {
      id: 3,
      name: "PrecisionLab Technologies",
      country: "Germany",
      description: "Renowned for developing innovative lab equipment with a focus on precision engineering and reliability for research labs worldwide.",
      expertise: ["Precision Instruments", "Quality Control", "Research Equipment"],
      logo: "/placeholder-logo.png"
    },
    {
      id: 4,
      name: "LabAutomation Inc.",
      country: "United States",
      description: "Leading provider of integrated lab automation systems for clinical diagnostics, pharmaceutical research, and industrial applications.",
      expertise: ["Clinical Diagnostics", "Pharmaceutical Research", "Industrial Applications"],
      logo: "/placeholder-logo.png"
    }
  ];

  return (
    <section id="principals" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Global Partners</h2>
          <p className="text-xl text-sky-600 max-w-3xl mx-auto">
            Collaborating with World Leaders in Lab Automation
          </p>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We take pride in our long-term partnerships with industry leaders from Germany and the United States,
            bringing their advanced technologies to laboratories across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principals.map((principal) => (
            <div key={principal.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {/* Logo placeholder */}
                  <div className="bg-gray-200 h-16 w-16 flex items-center justify-center rounded mr-4">
                    <span className="text-xs text-gray-500">LOGO</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{principal.name}</h3>
                    <p className="text-sky-600">
                      {principal.country === "Germany" ? (
                        <span>🇩🇪 Germany</span>
                      ) : (
                        <span>🇺🇸 United States</span>
                      )}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{principal.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Areas of Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {principal.expertise.map((exp, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-auto bg-gray-50 px-6 py-3 border-t border-gray-100">
                <Link 
                  href={`/principals/${principal.id}`} 
                  className="text-sky-600 font-medium hover:text-sky-700 flex items-center"
                >
                  Learn more about our partnership
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/partners" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700"
          >
            See All Our Partners
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Principals;