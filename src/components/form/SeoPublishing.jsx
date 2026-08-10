import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function SeoPublishing() {
  const { register, watch } = useFormContext();
  const publishingOption = watch("seoAndPublishing.publishingOption");

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-800 pb-3">
        <h2 className="text-xl font-bold text-white">SEO & Publishing Options</h2>
      </div>

      <div>
        <label htmlFor="seoTitle" className="block text-sm font-medium text-gray-300">SEO Title</label>
        <input 
          id="seoTitle"
          {...register("seoAndPublishing.seoTitle")} 
          placeholder="Custom Search Engine Title..."
          className="mt-1 w-full p-2.5 bg-gray-950 border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600 text-sm" 
        />
      </div>

      <div>
        <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-300">Description</label>
        <textarea 
          id="metaDescription"
          {...register("seoAndPublishing.metaDescription")} 
          rows={3} 
          placeholder="Brief meta snippet for search previews..."
          className="mt-1 w-full p-2.5 bg-gray-950 border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600 text-sm" 
        />
      </div>

      <div className="flex flex-wrap gap-6 border-t border-gray-800 pt-4">
        <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
          <input 
            type="checkbox" 
            {...register("seoAndPublishing.featuredMovie")} 
            className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 accent-blue-600 bg-gray-950 border-gray-800" 
          />
          Mark as Featured Movie
        </label>
        <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
          <input 
            type="checkbox" 
            {...register("seoAndPublishing.trendingMovie")} 
            className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 accent-blue-600 bg-gray-950 border-gray-800" 
          />
          Mark as Trending Movie
        </label>
      </div>

      <div className="border-t border-gray-800 pt-4 space-y-3">
        <label className="block text-sm font-medium text-gray-300">Publishing Mode</label>
        <div className="flex flex-wrap gap-4">
          {["Publish Immediately", "Save as Draft", "Schedule"].map((option) => (
            <label key={option} className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
              <input 
                type="radio" 
                value={option} 
                {...register("seoAndPublishing.publishingOption")} 
                className="text-blue-600 focus:ring-blue-500 accent-blue-600" 
              /> 
              {option}
            </label>
          ))}
        </div>

        {publishingOption === 'Schedule' && (
          <div className="mt-3">
            <label htmlFor="publishDateTime" className="block text-xs font-semibold text-gray-400">Schedule Date & Time</label>
            <input 
              id="publishDateTime"
              type="datetime-local" 
              {...register("seoAndPublishing.publishDateTime")} 
              className="mt-1 w-full md:w-1/2 p-2 bg-gray-950 border border-gray-800 text-white rounded-md text-sm focus:ring-1 focus:ring-blue-500 [color-scheme:dark]" 
            />
          </div>
        )}
      </div>

      <div className="border border-blue-900/40 bg-blue-950/20 p-4 rounded-xl">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("seoAndPublishing.confirmation")}
            className="w-4 h-4 mt-0.5 text-blue-600 rounded focus:ring-blue-500 accent-blue-600 bg-gray-950 border-gray-800"
          />
          <span className="text-sm font-semibold text-gray-200">
           I confirm that all the movie information and files I entered are correct and ready to be published.
          </span>
        </label>
      </div>
    </div>
  );
}