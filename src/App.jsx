import React, { useState } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { AuthProvider, ProtectedRoute } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MovieFormPage from "./pages/MovieFormPage";

function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center shadow-2xl relative z-10">
        <div className="w-16 h-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold border border-green-500/20">
          ✓
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Movie Submitted!</h1>
        <p className="text-gray-400 text-sm mb-6">Your movie entry has been saved.</p>
        <Link
          to="/"
          className="inline-block w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-xl transition-all text-center"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-[#030712] text-white flex flex-col justify-between relative overflow-hidden">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const [customMovies, setCustomMovies] = useState(() => {
    const saved = localStorage.getItem('custom_movies');
    return saved ? JSON.parse(saved) : [];
  });

  const handleAddMovie = (newMovie) => {
    const updatedMovies = [newMovie, ...customMovies];
    setCustomMovies(updatedMovies);
    localStorage.setItem('custom_movies', JSON.stringify(updatedMovies));
  };

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/movies/create" 
          element={<MovieFormPage onAddMovie={handleAddMovie} />} 
        />
        <Route path="/movies/success" element={<SuccessPage />} />

        <Route element={<ProtectedRoute />}>
          <Route 
            path="/dashboard" 
            element={<Dashboard customMovies={customMovies} onAddMovie={handleAddMovie} />} 
          />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}