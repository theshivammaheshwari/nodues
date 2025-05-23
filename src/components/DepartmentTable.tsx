import React from 'react';
import { motion } from 'framer-motion';

interface Department {
  name: string;
}

const departments: Department[] = [
  { name: 'Accounts' },
  { name: 'Central Library' },
  { name: 'Store' },
  { name: 'LUCS' },
  { name: 'Warden (In-charge)' },
  { name: 'Administration' },
  { name: 'Sports' },
  { name: 'Head of Department' },
  { name: 'Medical Unit' },
  { name: 'Placement Office' },
  { name: 'NAD Cell' },
];

const DepartmentTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-800 text-sm">
        <thead>
          <tr>
            <th className="border border-gray-800 px-2 py-1 text-left">Department</th>
            <th className="border border-gray-800 px-2 py-1 text-left">Dues if any/No Dues</th>
            <th className="border border-gray-800 px-2 py-1 text-left">Signature of HoD</th>
            <th className="border border-gray-800 px-2 py-1 text-left">Remarks</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept, index) => (
            <motion.tr 
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <td className="border border-gray-800 px-2 py-1">{dept.name}</td>
              <td className="border border-gray-800 px-2 py-1 min-w-[120px]"></td>
              <td className="border border-gray-800 px-2 py-1 min-w-[120px]"></td>
              <td className="border border-gray-800 px-2 py-1 min-w-[120px]"></td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentTable;