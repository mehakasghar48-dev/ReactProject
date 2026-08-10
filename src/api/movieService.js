const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const fetchMovies = async (search = '', genre = '') => {
  const params = new URLSearchParams();
  if (search) params.append('search', search);
  if (genre) params.append('genre', genre);
  const queryString = params.toString() ? `?${params.toString()}` : '';

  const response = await fetch(`${API_BASE_URL}/movies${queryString}`);
  if (!response.ok) 
   {
    throw new Error('Error: Failed to fetch moviesr');
  }
  return await response.json();
};

export const fetchMovieById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/movies/${id}`);
  if (!response.ok) 
    {
    throw new Error('Movie not found');
  }
  return await response.json();
};