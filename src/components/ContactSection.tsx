import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <div>
      <div className="mb-4">
        <h4 className="text-sm mb-2">◆ I wish to donate Rs.____________from my caution money refund due, from the Institute, towards Students’ Welfare fund of LNMIIT.  </h4>
      </div>
      
      <div className="space-y-3">
        <div className="flex gap-2">
          <span className="text-sm">Contact No (Res.):</span>
          <input 
            type="tel" 
            className="flex-1 border-b border-gray-400 focus:outline-none"
          />
          <span className="text-sm ml-4">Mobile:</span>
          <input 
            type="tel" 
            className="flex-1 border-b border-gray-400 focus:outline-none"
          />
        </div>
        
        <div className="flex gap-2">
          <span className="text-sm">E-mail:</span>
          <input 
            type="email" 
            className="flex-1 border-b border-gray-400 focus:outline-none"
          />
        </div>
        
        <div className="flex gap-2">
          <span className="text-sm">Father's Name:</span>
          <input 
            type="text" 
            className="flex-1 border-b border-gray-400 focus:outline-none"
          />
          <span className="text-sm ml-4">Mobile no.:</span>
          <input 
            type="tel" 
            className="flex-1 border-b border-gray-400 focus:outline-none"
          />
        </div>
        
        <div className="flex gap-2">
          <span className="text-sm">Address for correspondence:</span>
          <input 
            type="text" 
            className="flex-1 border-b border-gray-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;