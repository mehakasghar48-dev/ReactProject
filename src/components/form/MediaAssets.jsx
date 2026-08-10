import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import ImageUpload from './ImageUpload';

export default function MediaAssets() {
  const { control, register, watch } = useFormContext();
  const trailerSource = watch("media.trailerSource");

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-800 pb-3">
        <h2 className="text-xl font-bold text-white">Media & Visual Assets</h2>
        <p className="text-xs text-gray-400 mt-1">Upload graphics, posters, and links.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Controller
          name="media.poster"
          control={control}
          render={({ field }) => (
            <div>
              <ImageUpload label="Main Poster" onChange={field.onChange} value={field.value} />
            </div>
          )}
        />

        <Controller
          name="media.thumbnail"
          control={control}
          render={({ field }) => (
            <div>
              <ImageUpload label="Grid Thumbnail" onChange={field.onChange} value={field.value} />
            </div>
          )}
        />
      </div>

      <Controller
        name="media.backdrops"
        control={control}
        render={({ field }) => (
          <ImageUpload label="Backdrop Gallery" multiple onChange={field.onChange} value={field.value} />
        )}
      />

      <div className="border-t border-gray-800 pt-4 space-y-3">
        <label className="block text-sm font-medium text-gray-300">Trailer Platform</label>
        <div className="flex gap-6">
          {["YouTube", "Vimeo", "Custom URL"].map((source) => (
            <label key={source} className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
              <input 
                type="radio" 
                value={source} 
                {...register("media.trailerSource")} 
                className="text-blue-500 focus:ring-blue-500 accent-blue-600" 
              /> 
              {source}
            </label>
          ))}
        </div>

        {trailerSource && (
          <div className="mt-3">
            <label htmlFor="trailerUrl" className="block text-sm font-medium text-gray-300">
              Trailer Link ({trailerSource})
            </label>
            <input
              id="trailerUrl"
              {...register("media.trailerUrl")}
              placeholder={`Paste ${trailerSource} URL here...`}
              className="mt-1 w-full p-2.5 bg-gray-950 border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600 text-sm"
            />
          </div>
        )}
      </div>
    </div>
  );
}