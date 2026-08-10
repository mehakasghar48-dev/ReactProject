import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    director: '',
    releaseYear: '',
    rating: '',
    duration: '',
    description: '',
    posterUrl: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:5000/api/movies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          releaseYear: Number(formData.releaseYear),
          rating: Number(formData.rating),
          duration: Number(formData.duration),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to create movie');
      }

      setSuccess('Movie created successfully!');
      
      setFormData({
        title: '',
        genre: '',
        director: '',
        releaseYear: '',
        rating: '',
        duration: '',
        description: '',
        posterUrl: '',
      });

      setTimeout(() => {
        navigate('/');
      }, 1500);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Add New Movie</h2>

      {loading && <p>Creating movie...</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <input name="genre" placeholder="Genre" value={formData.genre} onChange={handleChange} required />
        <input name="director" placeholder="Director" value={formData.director} onChange={handleChange} required />
        <input name="releaseYear" type="number" placeholder="Release Year" value={formData.releaseYear} onChange={handleChange} required />
        <input name="rating" type="number" step="0.1" placeholder="Rating" value={formData.rating} onChange={handleChange} required />
        <input name="duration" type="number" placeholder="Duration (mins)" value={formData.duration} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input name="posterUrl" placeholder="Poster URL" value={formData.posterUrl} onChange={handleChange} required />

        <button type="submit" disabled={loading}>
          {loading ? 'Saving...' : 'Add Movie'}
        </button>
      </form>
    </div>
  );
};

export default AddMovie;