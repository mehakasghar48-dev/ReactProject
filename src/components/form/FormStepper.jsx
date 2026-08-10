import React from 'react';

const DEFAULT_STEPS = [
  'Basic Info',
  'Movie Details',
  'Media Assets',
  'Availability',
  'SEO & Publish',
];

export default function FormStepper({ steps = DEFAULT_STEPS, currentStep, setCurrentStep }) {
  return (
    <div className="w-full py-4 mb-6 border-b border-gray-800">
      <div className="flex justify-between items-center max-w-4xl mx-auto px-2 overflow-x-auto gap-3 no-scrollbar">
        {steps.map((label, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div
              key={index}
              onClick={() => setCurrentStep && setCurrentStep(index)}
              className={`flex items-center gap-2 cursor-pointer transition-colors shrink-0 ${
                isCompleted
                  ? 'text-cyan-400 font-semibold'
                  : isActive
                  ? 'text-cyan-300 font-bold'
                  : 'text-gray-500 hover:text-gray-400'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all shrink-0 ${
                  isCompleted
                    ? 'bg-cyan-600 border-cyan-500 text-white'
                    : isActive
                    ? 'border-cyan-400 text-cyan-300 bg-cyan-950/50 shadow-md shadow-cyan-500/20'
                    : 'border-gray-800 text-gray-500 bg-gray-950'
                }`}
              >
                {isCompleted ? '✓' : index + 1}
              </div>
              <span className="text-xs whitespace-nowrap">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}