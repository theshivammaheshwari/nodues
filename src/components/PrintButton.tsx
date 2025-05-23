import React from 'react';
import { Printer } from 'lucide-react';
import { motion } from 'framer-motion';

interface PrintButtonProps {
  onClick: () => void;
}

const PrintButton: React.FC<PrintButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2 shadow-md print:hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Printer size={18} />
      <span>Print Form</span>
    </motion.button>
  );
};

export default PrintButton;