import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import MultiSelect from './MultiSelect';

const OTT_PLATFORMS = ["Netflix", "Prime Video", "Disney+", "Hulu", "HBO Max", "Apple TV+", "Paramount+"];
const CURRENCIES = ["USD", "EUR", "GBP", "INR", "CAD", "AUD"];

export default function Availability() {
  const { register, control, watch } = useFormContext();

  const theaterRelease = watch("availability.theaterRelease");
  const availableWorldwide = watch("availability.availableWorldwide");

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-800 pb-3">
        <h2 className="text-xl font-bold text-white">Streaming & Distribution</h2>
      </div>

      <Controller
        name="availability.ottPlatforms"
        control={control}
        render={({ field }) => (
          <div>
            <MultiSelect
              label="OTT Platforms"
              options={OTT_PLATFORMS}
              selectedValues={field.value || []}
              onChange={field.onChange}
            />
          </div>
        )}
      />

      <div className="border-t border-gray-800 pt-4 space-y-3">
        <label className="block text-sm font-medium text-gray-300">Theatrical Release</label>
        <div className="flex gap-6">
          {["Yes", "No"].map((option) => (
            <label key={option} className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
              <input
                type="radio"
                value={option}
                {...register("availability.theaterRelease")}
                className="text-blue-500 focus:ring-blue-500 accent-blue-600"
              />
              {option}
            </label>
          ))}
        </div>

        {theaterRelease === "Yes" && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Country</label>
              <input
                {...register("availability.theaterDetails.country")}
                placeholder="Country"
                className="w-full p-2 bg-gray-950 border border-gray-800 text-white rounded-lg text-sm focus:ring-1 focus:ring-blue-500 placeholder-gray-600"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">City</label>
              <input
                {...register("availability.theaterDetails.city")}
                placeholder="City"
                className="w-full p-2 bg-gray-950 border border-gray-800 text-white rounded-lg text-sm focus:ring-1 focus:ring-blue-500 placeholder-gray-600"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Release Date</label>
              <input
                type="date"
                {...register("availability.theaterDetails.releaseDate")}
                className="w-full p-2 bg-gray-950 border border-gray-800 text-white rounded-lg text-sm focus:ring-1 focus:ring-blue-500 text-gray-300"
              />
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-gray-800 pt-4 space-y-3">
        <label className="flex items-center gap-3 text-sm font-medium text-gray-300 cursor-pointer">
          <input
            type="checkbox"
            {...register("availability.availableWorldwide")}
            className="w-4 h-4 text-blue-600 rounded bg-gray-900 border-gray-800 focus:ring-blue-500 accent-blue-600"
          />
          Available Worldwide
        </label>

        {!availableWorldwide && (
          <div>
            <label className="block text-xs text-gray-400 mb-1">Select Available Countries</label>
            <input
              {...register("availability.selectedCountries")}
              placeholder="e.g. USA, Canada, UK"
              className="w-full p-2.5 bg-gray-950 border border-gray-800 text-white rounded-lg text-sm focus:ring-1 focus:ring-blue-500 placeholder-gray-600"
            />
          </div>
        )}
      </div>
      
      <div className="border-t border-gray-800 pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300">Rental Price</label>
          <input
            type="number"
            step="0.01"
            {...register("availability.rentalPrice")}
            placeholder="0.00"
            className="mt-1 w-full p-2.5 bg-gray-950 border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">Purchase Price</label>
          <input
            type="number"
            step="0.01"
            {...register("availability.purchasePrice")}
            placeholder="0.00"
            className="mt-1 w-full p-2.5 bg-gray-950 border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">Currency</label>
          <select
            {...register("availability.currency")}
            className="mt-1 w-full p-2.5 bg-gray-950 border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
          >
            {CURRENCIES.map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}