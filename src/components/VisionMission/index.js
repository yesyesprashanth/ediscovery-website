"use client";

import { FaGlobe, FaFileAlt, FaWindowRestore } from 'react-icons/fa';

const VisionMission = () => {
  return (
    <section style={{ 
      backgroundColor: '#f3f4f6', 
      marginTop: '-1px',
      position: 'relative',
      paddingTop: '130px',
      paddingBottom: '120px'
    }}>
      <div className="w-[80%] mx-auto px-8">
        <div>
          <div className="flex flex-row justify-center items-start" style={{ gap: '150px' }}>
            {/* Vision */}
            <div className="flex flex-col items-center text-center w-[200px]">
              <div className="mb-3 bg-white p-4 rounded-full shadow-sm">
                <FaGlobe style={{ width: '40px', height: '40px', color: '#66CDAA' }} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800 px-3 py-1 bg-gray-300 rounded-md" 
                  style={{ fontFamily: 'Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
                Our Vision
              </h3>
              <p className="text-gray-600 text-sm h-16">
                To be the leading provider of<br/>
                innovative lab automation systems,<br/>
                empowering scientific advancement.
              </p>
            </div>

            {/* Mission */}
            <div className="flex flex-col items-center text-center w-[200px]">
              <div className="mb-3 bg-white p-4 rounded-full shadow-sm">
                <FaFileAlt style={{ width: '40px', height: '40px', color: '#66CDAA' }} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800 px-3 py-1 bg-gray-300 rounded-md"
                  style={{ fontFamily: 'Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm h-16">
                To deliver reliable solutions that<br/>
                accelerate research progress and<br/>
                enhance scientific productivity.
              </p>
            </div>

            {/* Motto */}
            <div className="flex flex-col items-center text-center w-[200px]">
              <div className="mb-3 bg-white p-4 rounded-full shadow-sm">
                <FaWindowRestore style={{ width: '40px', height: '40px', color: '#66CDAA' }} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800 px-3 py-1 bg-gray-300 rounded-md"
                  style={{ fontFamily: 'Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
                Our Motto
              </h3>
              <p className="text-gray-600 text-sm h-16">
                "Automating Excellence,<br/>
                Advancing Science."<br/>
                Precision in every process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;