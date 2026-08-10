import React from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';

export default function DynamicFieldArray({ name, label, placeholder = "Enter item" }) {
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <div className="space-y-3">
      {label && (
        <label className="block text-sm font-medium text-gray-300">
          {label}
        </label>
      )}

      <div className="space-y-2">
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-2 items-center">
            <input
              type="text"
              {...register(`${name}.${index}.name`)}
              placeholder={`${placeholder} #${index + 1}`}
              className="w-full p-2.5 bg-gray-950 border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600 text-sm"
            />
            <button
              type="button"
              onClick={() => remove(index)}
              className="p-2.5 text-red-400 hover:bg-red-500/10 border border-gray-800 rounded-lg transition cursor-pointer"
              title="Remove Item"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => append({ name: '' })}
        className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer mt-2"
      >
        + Add {label || 'Item'}
      </button>
    </div>
  );
}