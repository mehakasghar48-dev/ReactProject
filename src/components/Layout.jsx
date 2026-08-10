import React from 'react';
import { LayoutDashboard, Film, BarChart2, Plus, LogOut } from 'lucide-react';

export default function Layout({ children, activeModule, setActiveModule, onAddMovieClick }) {
  const handleLogout = () => {
    localStorage.removeItem('auth');
    window.location.href = '/login';
  };

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Movies & Shows', icon: Film },
    { name: 'Analytics', icon: BarChart2 },
  ];

  return (
    <div className="flex h-screen bg-[#030712] text-white overflow-hidden">
      <aside className="w-64 bg-[#080d1a] border-r border-gray-800 flex flex-col p-4 shrink-0">
        <div className="flex items-center gap-3 px-3 py-4 mb-6">
          <div className="bg-cyan-500/10 p-2 rounded-xl border border-cyan-500/30">
            <Film className="text-cyan-400" size={24} />
          </div>
          <span className="font-bold text-lg text-white">App Panel</span>
        </div>

        <nav className="space-y-2 flex-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeModule === item.name;
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveModule && setActiveModule(item.name)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all cursor-pointer ${
                  isActive
                    ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-500/20 font-bold'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <Icon size={18} />
                {item.name}
              </button>
            );
          })}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-20 border-b border-gray-800 bg-[#030712] px-8 flex items-center justify-between shrink-0">
          <h1 className="text-xl font-bold text-white">{activeModule}</h1>

          <div className="flex items-center gap-4">
            {activeModule === 'Movies & Shows' && (
              <button
                type="button"
                onClick={onAddMovieClick}
                className="px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-sm rounded-xl shadow-lg shadow-cyan-500/20 transition flex items-center gap-2 cursor-pointer"
              >
                <Plus size={16} />
                 Add Movie
              </button>
            )}
            <button
              type="button"
              onClick={handleLogout}
              className="px-4 py-2 border border-red-500/50 text-red-400 hover:bg-red-500/10 font-medium text-sm rounded-xl transition flex items-center gap-2 cursor-pointer"
            >
              <LogOut size={16} />
               Logout
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}