import React from 'react';

export default function MultiSelect({ label, options = [], selectedValues = [], onChange }) {
  const handleToggle = (option) => {
    const currentList = Array.isArray(selectedValues) ? selectedValues : [];
    if (currentList.includes(option)) {
      onChange(currentList.filter((item) => item !== option));
    } else {
      onChange([...currentList, option]);
    }
  };
  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-gray-300">{label}</label>}
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = Array.isArray(selectedValues) && selectedValues.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => handleToggle(option)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition cursor-pointer ${
                isSelected
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/20'
                  : 'bg-gray-950 text-gray-300 border-gray-800 hover:border-gray-700 hover:text-white'
              }`}
            >
              {isSelected ? `✓ ${option}` : `+ ${option}`}
            </button>
          );
        })}
      </div>
    </div>
  );
}