'use client';

const StatsCard = () => {
  return (
    <div className="w-[80%] mx-auto" style={{ 
      position: 'absolute', 
      left: '50%', 
      transform: 'translateX(-50%)',
      bottom: '-40px',
      zIndex: 10,
      backgroundColor: '#66CDAA',
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      paddingLeft: '100px',
      paddingRight: '100px',
      paddingTop: '20px',
      paddingBottom: '20px'
    }}>
      <div className="bg-[#66CDAA] rounded-lg p-8 flex justify-between">
        {/* 25+ Years Experience Section - 40% width */}
        <div className="flex items-center relative" style={{ width: '40%' }}>
          <div className="text-center w-full">
            <h3 className="text-4xl font-bold text-white">25+</h3>
            <p className="text-white/90">Years experience working.</p>
          </div>
          
          {/* Vertical divider line */}
          <div className="absolute right-0 h-full w-[2px] bg-white"></div>
        </div>
        
        {/* Spacer div for padding */}
        <div style={{ width: '100px' }}></div>
        
        {/* Happy Client Section - 20% width */}
        <div className="text-center" style={{ width: '25%' }}>
          <h3 className="text-4xl font-bold text-white">51 K+</h3>
          <p className="text-white/90">Happy Client</p>
        </div>

        {/* Spacer div after Happy Client */}
        <div style={{ width: '50px' }}></div>
        
        {/* Principals Section - 20% width */}
        <div className="text-center" style={{ width: '15%' }}>
          <h3 className="text-4xl font-bold text-white">6+</h3>
          <p className="text-white/90">Principals</p>
        </div>

        {/* Spacer div after Principals */}
        <div style={{ width: '50px' }}></div>
        
        {/* Client Reviews Section - 20% width */}
        <div className="text-center" style={{ width: '25%' }}>
          <h3 className="text-4xl font-bold text-white">4.7</h3>
          <p className="text-white/90">Client Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;