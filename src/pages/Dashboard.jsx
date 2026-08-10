import React, { useState } from 'react';
import Layout from '../components/Layout';
import MovieList from '../components/MovieList';
import MovieFormPage from './MovieFormPage';
import { CheckCircle2, BarChart3 } from 'lucide-react';

export default function Dashboard() {
  const [activeModule, setActiveModule] = useState('Movies & Shows');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [customMovies, setCustomMovies] = useState([]);

  const handleAddMovie = (newMovie) => {
    setCustomMovies((prev) => [newMovie, ...prev]);
    setIsFormOpen(false);
  };

  return (
    <Layout 
      activeModule={activeModule} 
      setActiveModule={setActiveModule}
      onAddMovieClick={() => setIsFormOpen(true)}
    >
      {activeModule === 'Dashboard' && (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="bg-gray-900 p-10 rounded-2xl shadow-xl max-w-md w-full border border-gray-800 flex flex-col items-center">
            <div className="text-emerald-400 mb-4 bg-emerald-500/10 p-4 rounded-full">
              <CheckCircle2 size={48} />
            </div>
            <h1 className="text-2xl font-black text-white mb-2">Dashboard Active</h1>
            <p className="text-gray-400">
              You selected the <strong className="text-cyan-400">Dashboard</strong> module.
            </p>
          </div>
        </div>
      )}

      {activeModule === 'Movies & Shows' && (
        <MovieList customMovies={customMovies} />
      )}

      {activeModule === 'Analytics' && (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="bg-gray-900 p-10 rounded-2xl shadow-xl max-w-md w-full border border-gray-800 flex flex-col items-center">
            <div className="text-cyan-400 mb-4 bg-cyan-500/10 p-4 rounded-full">
              <BarChart3 size={48} />
            </div>
            <h1 className="text-2xl font-black text-white mb-2">Analytics Module</h1>
            <p className="text-gray-400">
              You selected the <strong className="text-cyan-400">Analytics</strong> module.
            </p>
          </div>
        </div>
      )}

      {isFormOpen && (
        <MovieFormPage
          onClose={() => setIsFormOpen(false)}
          onAddMovie={handleAddMovie}
        />
      )}
    </Layout>
  );
}