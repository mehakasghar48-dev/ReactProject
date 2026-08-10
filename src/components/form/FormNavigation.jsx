import React from 'react';

export default function FormNavigation({ currentStep, totalSteps, onPrev, onNext, isSubmitting }) {
  return (
    <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-800">
      {currentStep > 0 ? (
        <button
          type="button"
          onClick={onPrev}
          className="px-5 py-2.5 rounded-xl border border-gray-800 bg-gray-950 text-gray-300 hover:bg-gray-800 font-medium transition cursor-pointer text-sm"
        >
          Previous
        </button>
      ) : (
        <div />
      )}

      {currentStep < totalSteps - 1 ? (
        <button
          type="button"
          onClick={onNext}
          className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition cursor-pointer text-sm shadow-lg shadow-blue-600/20"
        >
          Next Step
        </button>
      ) : (
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition cursor-pointer disabled:opacity-50 text-sm shadow-lg shadow-emerald-600/20"
        >
          {isSubmitting ? "Submitting..." : "Submit Movie"}
        </button>
      )}
    </div>
  );
}