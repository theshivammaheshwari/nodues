import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import FormHeader from './FormHeader';
import DepartmentTable from './DepartmentTable';
import RefundSection from './RefundSection';
import ContactSection from './ContactSection';
import PrintButton from './PrintButton';
import { motion } from 'framer-motion';

const NoDeusForm: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => formRef.current,
    documentTitle: 'Student No Dues Form',
  });

  return (
    <div className="max-w-4xl mx-auto">      
      <motion.div 
        ref={formRef}
        className="bg-white p-4 rounded-lg shadow-md print:shadow-none print:p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <FormHeader />
        
        <div className="flex justify-end mb-2">
          <div className="form-group" style={{ width: '150px' }}>
            <label className="block text-xs text-gray-700">Date:</label>
            <input 
              type="date" 
              className="w-full p-1 border-b border-gray-400 focus:outline-none text-sm"
            />
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-sm">
            This is to certify that there is nothing outstanding against Mr./Ms.{' '}
            <input 
              type="text" 
              className="border-b border-gray-400 focus:outline-none px-1"
              style={{ width: '200px' }}
            />
            {' '}Roll No.{' '}
            <input 
              type="text" 
              className="border-b border-gray-400 focus:outline-none px-1"
              style={{ width: '100px' }}
            />
          </p>
        </div>
        
        <div className="mb-4">
          <DepartmentTable />
        </div>
        
        <div className="mb-4">
          <RefundSection />
        </div>
        
        <div className="mb-4">
          <ContactSection />
        </div>
        
        <div className="mt-4 flex justify-between items-end">
          <div>
            <p className="text-xs">Submitted Date:</p>
            <input 
              type="date" 
              className="border-b border-gray-400 focus:outline-none p-1 text-sm"
            />
          </div>
          <div>
            <p className="text-xs text-right">Signature of Student</p>
            <div className="w-48 h-6 border-b border-gray-400 mt-2"></div>
          </div>
        </div>

        <div className="mt-6 flex justify-center print:hidden">
          <PrintButton onClick={handlePrint} />
        </div>
      </motion.div>
    </div>
  );
};

export default NoDeusForm;