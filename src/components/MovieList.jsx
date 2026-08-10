import React, { useState, useEffect } from 'react';
import { Star, Film } from 'lucide-react';
import { fetchMovies } from '../api/movieService';

const API_KEY = "8b662de63382f96983d4f98654385457";
const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

const TMDB_GENRE_MAP = {
  28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime",
  99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History",
  27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Sci-Fi",
  10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"
};

export default function MovieList({ customMovies = [] }) {
  const [backendMovies, setBackendMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [enrichedCustomMovies, setEnrichedCustomMovies] = useState([]);
  
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* ==========================================================================
     Section 1. BACKEND MOVIES API
     ========================================================================== */
  useEffect(() => {
    const loadBackendMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchMovies(search, genre);
        if (response.success) {
          setBackendMovies(response.data);
        } else {
          setError(response.message || 'Failed to fetch movies');
        }
      } catch (err) {
        setError('Backend server offline');
      } finally {
        setLoading(false);
      }
    };

    loadBackendMovies();
  }, [search, genre]);

  /* ==========================================================================
     Section 2. TMDB TOP 10 MOVIES
     ========================================================================== */
  useEffect(() => {
    const fetchTopRated = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
        const data = await res.json();
        if (data.results) setTopRated(data.results.slice(0, 10));
      } catch (err) {
        console.error("Failed to fetch Top 10 movies:", err);
      }
    };

    fetchTopRated();
  }, []);

  useEffect(() => {
    const enrichCustomMovies = async () => {
      const updated = await Promise.all(
        customMovies.map(async (movie) => {
          const title = movie.title || movie.basicInfo?.title;
          const hasLocalPoster =
            movie.posterUrl ||
            movie.poster_path ||
            typeof movie.poster === 'string' ||
            movie.poster?.previewUrl ||
            movie.media?.poster?.[0];

          if (!hasLocalPoster && title) {
            try {
              const res = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(title)}`
              );
              const data = await res.json();
              if (data.results && data.results.length > 0) {
                const matched = data.results[0];
                return {
                  ...movie,
                  poster_path: matched.poster_path,
                  tmdbRating: matched.vote_average
                };
              }
            } catch (error) {
              console.error(`Failed to fetch poster for ${title}:`, error);
            }
          }
          return movie;
        })
      );
      setEnrichedCustomMovies(updated);
    };

    enrichCustomMovies();
  }, [customMovies]);

  const renderMovieGrid = (movies, isTopTen = false) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      {movies.map((movie, index) => {
        let posterUrl = null;
        if (movie.posterUrl) {
          posterUrl = movie.posterUrl;
        } else if (typeof movie.poster === 'string') {
          posterUrl = movie.poster;
        } else if (movie.poster_path) {
          posterUrl = `${TMDB_IMAGE_BASE}${movie.poster_path}`;
        } else if (movie.poster?.previewUrl) {
          posterUrl = movie.poster.previewUrl;
        } else if (movie.media?.poster?.[0]) {
          posterUrl = URL.createObjectURL(movie.media.poster[0]);
        }

        const rating =
          movie.vote_average
            ? movie.vote_average.toFixed(1)
            : movie.tmdbRating
            ? movie.tmdbRating.toFixed(1)
            : movie.basicInfo?.rating || movie.rating || 'N/A';

        return (
          <div key={movie._id || movie.id || index} className="relative group">
            {isTopTen && (
              <div className="absolute -top-2.5 left-2.5 z-10 bg-cyan-400 text-black text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow-md">
                #{index + 1}
              </div>
            )}
            <div className="bg-gray-950 border border-cyan-500/20 rounded-xl p-3 hover:border-cyan-400 transition flex flex-col h-full justify-between shadow-lg">
              <div className="relative w-full h-56 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center border border-gray-800">
                {posterUrl ? (
                  <img
                    src={posterUrl}
                    alt={movie.title || movie.basicInfo?.title || 'Poster'}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-gray-500 gap-1">
                    <Film size={24} />
                    <span className="text-[10px]">No Poster</span>
                  </div>
                )}
                <div className="absolute bottom-2 right-2 bg-black/80 border border-cyan-400/50 text-cyan-300 text-[11px] font-bold px-1.5 py-0.5 rounded backdrop-blur-sm flex items-center gap-1">
                  <Star size={10} fill="currentColor" />
                  {rating}
                </div>
              </div>

              <div className="mt-2.5 space-y-1">
                <h3 className="font-bold text-white text-xs truncate" title={movie.title || movie.basicInfo?.title}>
                  {movie.title || movie.basicInfo?.title || 'Untitled Movie'}
                </h3>
                <p className="text-[10px] text-gray-400">
                  {movie.release_date
                    ? movie.release_date.slice(0, 4)
                    : (movie.releaseYear || movie.releaseDate || movie.basicInfo?.releaseDate || 'N/A')}
                </p>

                <div className="flex flex-wrap gap-1 mt-1">
                  {movie.genre_ids
                    ? movie.genre_ids.slice(0, 2).map((id) => (
                        <span key={id} className="text-[9px] bg-gray-900 text-cyan-400 px-1.5 py-0.5 rounded border border-gray-800">
                          {TMDB_GENRE_MAP[id] || 'Movie'}
                        </span>
                      ))
                    : (typeof movie.genre === 'string' ? [movie.genre] : movie.genres || movie.movieDetails?.genres || []).map((g, idx) => (
                        <span key={idx} className="text-[9px] bg-gray-900 text-cyan-400 px-1.5 py-0.5 rounded border border-gray-800">
                          {g}
                        </span>
                      ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="space-y-10">
      <div className="flex flex-col sm:flex-row gap-3 bg-gray-950 p-4 rounded-xl border border-cyan-500/20">
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-gray-900 border border-gray-800 text-cyan-300 placeholder-gray-500 text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-cyan-400"
        />
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="bg-gray-900 border border-gray-800 text-cyan-300 text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-cyan-400"
        >
          <option value="">All Genres</option>
          <option value="Action">Action</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Animation">Animation</option>
          <option value="Crime">Crime</option>
          <option value="Thriller">Thriller</option>
        </select>
      </div>

      {/* Section 1: EXPRESS BACKEND MOVIES */}
      <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-2xl p-5">
        <h2 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
           Backend Movies
        </h2>

        {loading && <p className="text-cyan-400 text-center py-6"> Loading movies...</p>}
        {error && <p className="text-red-400 text-center py-6">⚠️ {error}</p>}

        {!loading && !error && backendMovies.length === 0 && (
          <p className="text-gray-400 text-center py-6">No movies match your search query.</p>
        )}

        {!loading && !error && backendMovies.length > 0 && renderMovieGrid(backendMovies)}
      </div>

      {enrichedCustomMovies.length > 0 && (
        <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-2xl p-5">
          <h2 className="text-lg font-bold text-cyan-400 mb-4">
            + Added Movies ({enrichedCustomMovies.length})
          </h2>
          {renderMovieGrid(enrichedCustomMovies)}
        </div>
      )}

      {/* Section 2: TMDB TOP 10 MOVIES */}
      <div>
        <h2 className="text-lg font-bold text-white mb-4">Top 10 Movies</h2>
        {renderMovieGrid(topRated, true)}
      </div>
    </div>
  );
}