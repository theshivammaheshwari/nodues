import React from 'react';

const RefundSection: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-4">
        <h3 className="text-sm font-semibold underline">To Be filled by the Student</h3>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm mb-2">◆ Bank details for Caution Money Refund:</h4>
        <div className="space-y-2">
          <div className="flex gap-2">
            <span className="text-sm">Name of Account Holder:</span>
            <input 
              type="text" 
              className="flex-1 border-b border-gray-400 focus:outline-none"
            />
          </div>
          <div className="flex gap-2">
            <span className="text-sm">Account No:</span>
            <input 
              type="text" 
              className="flex-1 border-b border-gray-400 focus:outline-none"
            />
          </div>
          <div className="flex gap-2">
            <span className="text-sm">Name of Bank:</span>
            <input 
              type="text" 
              className="flex-1 border-b border-gray-400 focus:outline-none"
            />
          </div>
          <div className="flex gap-2">
            <span className="text-sm">Branch:</span>
            <input 
              type="text" 
              className="flex-1 border-b border-gray-400 focus:outline-none"
            />
          </div>
          <div className="flex gap-2">
            <span className="text-sm">City:</span>
            <input 
              type="text" 
              className="flex-1 border-b border-gray-400 focus:outline-none"
            />
            <span className="text-sm ml-4">IFSC Code:</span>
            <input 
              type="text" 
              className="flex-1 border-b border-gray-400 focus:outline-none"
            />
          </div>
        </div>
        <p className="text-xs italic mt-2">(Please attach photo copy of a Cheque)</p>
      </div>
    </div>
  );
};

export default RefundSection;