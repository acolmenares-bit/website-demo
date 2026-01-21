
import React from 'react';
import { Background } from './components/Background';
import { AIAssistant } from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 text-slate-200">
      <Background />
      
      {/* Navbar / Logo Area */}
      <nav className="absolute top-0 w-full p-8 flex justify-center items-center">
        <div className="flex items-center gap-2 group cursor-default">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-white uppercase italic">Nexus<span className="text-blue-500">System</span></span>
        </div>
      </nav>

      <main className="max-w-2xl w-full text-center space-y-12">
        {/* Main Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4 animate-bounce">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Sistemas en Actualización
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Mantenimiento en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">progreso</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl mx-auto font-light">
            Esta página no está disponible en este momento. Estamos realizando mejoras críticas para ofrecerte una experiencia superior.
          </p>
        </div>

        {/* Progress Tracker Card */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-slate-800">
            <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 w-[65%] animate-[progress_3s_ease-in-out_infinite]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="space-y-2">
              <span className="block text-slate-500 text-sm font-medium">Estado</span>
              <span className="block text-white font-semibold">Migrando Datos</span>
            </div>
            <div className="space-y-2">
              <span className="block text-slate-500 text-sm font-medium">Progreso</span>
              <span className="block text-white font-semibold">65% Completado</span>
            </div>
            <div className="space-y-2">
              <span className="block text-slate-500 text-sm font-medium">E.T.A.</span>
              <span className="block text-white font-semibold">~45 Minutos</span>
            </div>
          </div>
        </div>

        {/* Action / Notification Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="relative w-full max-w-sm">
            <input 
              type="email" 
              placeholder="nombre@email.com" 
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-500"
            />
            <button className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              Avisarme
            </button>
          </div>
          <span className="text-slate-500 text-sm">o revisa nuestro <a href="#" className="text-blue-500 hover:underline">Twitter/X</a></span>
        </div>
      </main>

      <footer className="absolute bottom-8 text-slate-600 text-sm flex gap-6">
        <a href="#" className="hover:text-slate-400 transition-colors">Estado del Servidor</a>
        <a href="#" className="hover:text-slate-400 transition-colors">Soporte Técnico</a>
        <a href="#" className="hover:text-slate-400 transition-colors">Privacidad</a>
      </footer>

      <AIAssistant />

      <style>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};

export default App;
