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
      <div className="bg-[#66CDAA] rounded-lg p-8 flex justify-between items-start">
        {/* Years Experience Section - 45% width */}
        <div className="flex items-start relative" style={{ width: '45%' }}>
          <div className="text-center w-full">
            <h3 className="text-4xl font-bold text-white" style={{ textAlign: 'center', lineHeight: '1', marginBottom: '0.5rem' }}>25+</h3>
            <p className="text-white/90 whitespace-nowrap">Years experience working.</p>
          </div>
          
          {/* Vertical divider line */}
          <div style={{ 
            position: 'absolute',
            right: -35,
            height: '80%',
            width: '2px',
            backgroundColor: 'white',
            top: '10%'
          }}></div>
        </div>
        
        {/* Spacer div for padding */}
        <div style={{ width: '80px' }}></div>
        
        {/* Happy Client Section - 25% width */}
        <div className="text-center" style={{ width: '25%' }}>
          <h3 className="text-4xl font-bold text-white" style={{ textAlign: 'center', lineHeight: '1', marginBottom: '0.5rem' }}>500+</h3>
          <p className="text-white/90">Happy Client</p>
        </div>

        {/* Spacer div */}
        <div style={{ width: '80px' }}></div>
        
        {/* Client Reviews Section - 25% width */}
        <div className="text-center" style={{ width: '25%' }}>
          <h3 className="text-4xl font-bold text-white" style={{ textAlign: 'center', lineHeight: '1', marginBottom: '0.5rem' }}>4.7</h3>
          <p className="text-white/90">Client Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;