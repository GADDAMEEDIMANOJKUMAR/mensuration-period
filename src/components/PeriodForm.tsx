import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

interface PeriodFormProps {
  onSubmit: (date: Date, cycleLength: number) => void;
}

export const PeriodForm: React.FC<PeriodFormProps> = ({ onSubmit }) => {
  const [lastPeriod, setLastPeriod] = useState('');
  const [cycleLength, setCycleLength] = useState('30');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(new Date(lastPeriod), parseInt(cycleLength));
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-6 shadow-lg space-y-6"
      onSubmit={handleSubmit}
    >
      <div className="space-y-4">
        <label className="block">
          <span className="flex items-center gap-2 text-gray-700 mb-2">
            <CalendarIcon className="w-5 h-5 text-rose-500" />
            Last Period Start Date
          </span>
          <input
            type="date"
            value={lastPeriod}
            onChange={(e) => setLastPeriod(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            required
          />
        </label>

        <label className="block">
          <span className="flex items-center gap-2 text-gray-700 mb-2">
            <Clock className="w-5 h-5 text-rose-500" />
            Cycle Length (days)
          </span>
          <input
            type="number"
            value={cycleLength}
            onChange={(e) => setCycleLength(e.target.value)}
            min="20"
            max="45"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            required
          />
        </label>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors"
        type="submit"
      >
        Calculate Next Period
      </motion.button>
    </motion.form>
  );
};