import React from 'react';
import { useFormContext, Controller, useFieldArray } from 'react-hook-form';
import DynamicFieldArray from './DynamicFieldArray';
import MultiSelect from './MultiSelect';

const GENRES = [
  "Action", "Adventure", "Comedy", "Horror", "Thriller", 
  "Romance", "Drama", "Fantasy", "Animation", "Sci-Fi"
];

export default function MovieDetails() {
  const { register, control } = useFormContext();
  const { fields: castFields, append: appendCast, remove: removeCast } = useFieldArray({
    control,
    name: "movieDetails.cast"
  });

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-800 pb-3">
        <h2 className="text-xl font-bold text-white">Movie Details & Cast</h2>
      </div>

      <Controller
        name="movieDetails.genres"
        control={control}
        render={({ field }) => (
          <div>
            <MultiSelect
              label="Genres"
              options={GENRES}
              selectedValues={field.value || []}
              onChange={field.onChange}
            />
          </div>
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="prodCompany" className="block text-sm font-medium text-gray-300">
            Production Company
          </label>
          <input 
            id="prodCompany"
            {...register("movieDetails.productionCompany")} 
            placeholder="e.g. Warner Bros. Pictures"
            className="mt-1 w-full p-2.5 bg-gray-950 border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600 text-sm" 
          />
        </div>

        <div>
          <label htmlFor="countryOrigin" className="block text-sm font-medium text-gray-300">
            Country of Origin
          </label>
          <input 
            id="countryOrigin"
            {...register("movieDetails.countryOfOrigin")} 
            placeholder="e.g. United States"
            className="mt-1 w-full p-2.5 bg-gray-950 border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600 text-sm" 
          />
        </div>
      </div>

      <DynamicFieldArray name="movieDetails.writers" label="Writers" placeholder="Writer Name" />

      <div className="space-y-3 border-t border-gray-800 pt-4">
        <label className="block text-sm font-medium text-gray-300">Cast Members</label>
        
        {castFields.map((field, index) => (
          <div key={field.id} className="p-3 border border-gray-800 rounded-xl bg-gray-950 grid grid-cols-1 sm:grid-cols-3 gap-3 relative">
            <div>
              <input
                {...register(`movieDetails.cast.${index}.actorName`)}
                placeholder="Actor Name"
                className="w-full p-2 bg-gray-900 border border-gray-800 text-white rounded-lg text-sm focus:ring-1 focus:ring-blue-500 placeholder-gray-600"
              />
            </div>

            <div>
              <input
                {...register(`movieDetails.cast.${index}.characterName`)}
                placeholder="Character Name"
                className="w-full p-2 bg-gray-900 border border-gray-800 text-white rounded-lg text-sm focus:ring-1 focus:ring-blue-500 placeholder-gray-600"
              />
            </div>

            <div className="flex gap-2 items-center">
              <select
                {...register(`movieDetails.cast.${index}.roleType`)}
                className="w-full p-2 bg-gray-900 border border-gray-800 text-white rounded-lg text-sm focus:ring-1 focus:ring-blue-500"
              >
                <option value="Main">Main</option>
                <option value="Supporting">Supporting</option>
                <option value="Cameo">Cameo</option>
              </select>
              
              <button
                type="button"
                onClick={() => removeCast(index)}
                className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition cursor-pointer"
                title="Remove Cast Member"
              >
                ✕
              </button>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={() => appendCast({ actorName: '', characterName: '', roleType: 'Main' })}
          className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer mt-2"
        >
          + Add Cast Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-800 pt-4">
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-300">
            Estimated Budget
          </label>
          <input 
            id="budget"
            type="number" 
            {...register("movieDetails.budget")} 
            placeholder="e.g. 160000000"
            className="mt-1 w-full p-2.5 bg-gray-950 border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600 text-sm" 
          />
        </div>

        <div>
          <label htmlFor="revenue" className="block text-sm font-medium text-gray-300">
            Box Office Revenue
          </label>
          <input 
            id="revenue"
            type="number" 
            {...register("movieDetails.revenue")} 
            placeholder="e.g. 836800000"
            className="mt-1 w-full p-2.5 bg-gray-950 border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600 text-sm" 
          />
        </div>
      </div>
    </div>
  );
}