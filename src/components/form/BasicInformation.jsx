import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function BasicInformation() {
  const { register } = useFormContext();

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-800 pb-3">
        <h2 className="text-xl font-bold text-white">Basic Information</h2>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-300">Movie Title</label>
          <input
            id="title"
            type="text"
            {...register("basicInfo.title")}
            placeholder="e.g. Inception"
            className="mt-1 w-full p-2.5 bg-gray-950 border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600 text-sm"
          />
        </div>

        <div>
          <label htmlFor="originalTitle" className="block text-sm font-medium text-gray-300">Original Title</label>
          <input
            id="originalTitle"
            type="text"
            {...register("basicInfo.originalTitle")}
            placeholder="Original title (if different)"
            className="mt-1 w-full p-2.5 bg-gray-950 border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600 text-sm"
          />
        </div>

        <div>
          <label htmlFor="slug" className="block text-sm font-medium text-gray-300">Slug</label>
          <input
            id="slug"
            type="text"
            {...register("basicInfo.slug")}
            placeholder="e.g. inception-2010"
            className="mt-1 w-full p-2.5 bg-gray-950 border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600 text-sm"
          />
        </div>

        <div>
          <label htmlFor="releaseDate" className="block text-sm font-medium text-gray-300">Release Date</label>
          <input
            id="releaseDate"
            type="date"
            {...register("basicInfo.releaseDate")}
            className="mt-1 w-full p-2.5 bg-gray-950 border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm text-gray-300"
          />
        </div>

        <div>
          <label htmlFor="runtime" className="block text-sm font-medium text-gray-300">Runtime (minutes)</label>
          <input
            id="runtime"
            type="text"
            {...register("basicInfo.runtime")}
            placeholder="e.g. 148"
            className="mt-1 w-full p-2.5 bg-gray-950 border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600 text-sm"
          />
        </div>

        <div>
          <label htmlFor="ageRating" className="block text-sm font-medium text-gray-300">Age Rating</label>
          <select
            id="ageRating"
            {...register("basicInfo.ageRating")}
            className="mt-1 w-full p-2.5 bg-gray-950 border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
          >
            <option value="G">G</option>
            <option value="PG">PG</option>
            <option value="PG-13">PG-13</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-300">Short Description</label>
        <input
          id="shortDescription"
          type="text"
          {...register("basicInfo.shortDescription")}
          placeholder="Brief summary or tagline..."
          className="mt-1 w-full p-2.5 bg-gray-950 border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600 text-sm"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-300">Full Description</label>
        <textarea
          id="description"
          rows={4}
          {...register("basicInfo.description")}
          placeholder="Enter detailed plot summary..."
          className="mt-1 w-full p-2.5 bg-gray-950 border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600 text-sm"
        />
      </div>
    </div>
  );
}