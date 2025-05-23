import React from 'react';

const FormHeader: React.FC = () => {
  return (
    <div className="mb-4 flex items-start">
      <img src="https://raw.githubusercontent.com/theshivammaheshwari/nodues/main/LNMIIT.png" alt="LNMIIT Logo" className="h-12 mr-4" />
      <div className="flex-1 text-center">
        <h2 className="text-lg font-bold text-black underline">STUDENT "NO DUES"</h2>
      </div>
    </div>
  );
};

export default FormHeader;