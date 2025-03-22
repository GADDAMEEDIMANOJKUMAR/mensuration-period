import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarComponent } from './components/Calendar';
import { PeriodForm } from './components/PeriodForm';
import { HeartPulse } from 'lucide-react';

function App() {
  const [prediction, setPrediction] = useState<{ date: Date; cycleLength: number } | null>(null);

  const handleFormSubmit = (date: Date, cycleLength: number) => {
    setPrediction({ date, cycleLength });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-rose-100 py-12 px-4">
      <div className="max-w-md mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="flex justify-center mb-4">
            <HeartPulse className="w-12 h-12 text-rose-500" />
          </div>
          <h1 className="text-gray-950 font-extrabold text-3xl">Period Tracker</h1>
          <p className="text-gray-800">Track and predict your menstrual cycle</p>
          
        </motion.div>

        <PeriodForm onSubmit={handleFormSubmit} />

        {prediction && (
          <CalendarComponent
            lastPeriod={prediction.date}
            cycleLength={prediction.cycleLength}
          />
        )}
      </div>
    </div>
  );
}

export default App;
