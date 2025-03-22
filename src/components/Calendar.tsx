import React from 'react';
import { motion } from 'framer-motion';
import { format, addDays } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

interface CalendarProps {
  lastPeriod: Date;
  cycleLength: number;
}

export const Calendar: React.FC<CalendarProps> = ({ lastPeriod, cycleLength }) => {
  const nextPeriod = addDays(lastPeriod, cycleLength);
  const daysUntil = Math.round((nextPeriod.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center gap-3 mb-4">
        <CalendarIcon className="w-6 h-6 text-rose-500" />
        <h2 className="text-xl font-semibold text-gray-800">Next Period Prediction</h2>
      </div>
      
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-gray-600">Your next period is expected on</p>
          <motion.p 
            className="text-2xl font-bold text-rose-600"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {format(nextPeriod, 'MMMM dd, yyyy')}
          </motion.p>
        </div>
        
        <div className="bg-rose-50 rounded-lg p-4 text-center">
          <p className="text-gray-700">
            {daysUntil} days until your next period
          </p>
        </div>
      </div>
    </motion.div>
  );
};