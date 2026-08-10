import React, { useState, useEffect } from 'react';

export default function ImageUpload({ label, multiple = false, onChange, value, accept = "image/*" }) {
  const [previews, setPreviews] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const newPreviews = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
    }));

    const updated = multiple ? [...previews, ...newPreviews] : newPreviews;
    setPreviews(updated);
    if (onChange) {
      onChange(multiple ? updated.map((p) => p.file) : files[0]);
    }
  };

  const removeImage = (index) => {
    if (previews[index]?.url) {
      URL.revokeObjectURL(previews[index].url);
    }
    const updated = previews.filter((_, i) => i !== index);
    setPreviews(updated);
    if (onChange) {
      onChange(multiple ? updated.map((p) => p.file) : null);
    }
  };

  useEffect(() => {
    return () => {
      previews.forEach((p) => {
        if (p.url) URL.revokeObjectURL(p.url);
      });
    };
  }, [previews]);

  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-gray-300">{label}</label>}
      <div className="border-2 border-dashed border-gray-800 hover:border-blue-500/50 rounded-xl p-4 text-center cursor-pointer relative bg-gray-950 transition">
        <input
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileChange}
          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
        />
        <p className="text-sm text-gray-300 font-medium">Drag files to upload</p>
        <p className="text-xs text-gray-500 mt-1">Images accepted</p>
      </div>

      {previews.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
          {previews.map((item, idx) => (
            <div key={idx} className="relative border border-gray-800 rounded-lg p-1 bg-gray-900 shadow-sm group">
              <img src={item.url} alt="Preview" className="h-20 w-full object-cover rounded" />
              <p className="text-[10px] truncate text-gray-400 mt-1">{item.name} ({item.size})</p>
              <button
                type="button"
                onClick={() => removeImage(idx)}
                className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shadow cursor-pointer transition"
                title="Remove image"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}