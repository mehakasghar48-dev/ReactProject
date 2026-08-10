import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail, ArrowLeft } from 'lucide-react';
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    login("dummy-secure-token-xyz");
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-app-background flex flex-col justify-center py-12 px-6 lg:px-8 relative text-app-text">
      <button 
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 flex items-center gap-2 text-app-primary hover:text-app-primary-hover font-semibold transition cursor-pointer"
      >
        <ArrowLeft size={18} /> Back to Home
      </button>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-app-surface py-8 px-10 shadow-2xl rounded-2xl border border-app-border">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-app-text tracking-tight">Welcome Back</h2>
            <p className="mt-2 text-sm text-app-muted">Please sign in to your account</p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-semibold text-app-text">Email Address</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-app-muted">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 bg-app-surface-secondary border border-app-border rounded-xl focus:ring-2 focus:ring-app-primary focus:border-app-primary text-sm text-app-text outline-none transition placeholder-app-muted"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-app-text">Password</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-app-muted">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-10 py-2.5 bg-app-surface-secondary border border-app-border rounded-xl focus:ring-2 focus:ring-app-primary focus:border-app-primary text-sm text-app-text outline-none transition placeholder-app-muted"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-app-muted hover:text-app-text transition cursor-pointer"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-app-primary focus:ring-app-primary border-app-border rounded bg-app-surface-secondary cursor-pointer"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-app-text select-none cursor-pointer">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-app-primary hover:bg-app-primary-hover transition cursor-pointer"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}