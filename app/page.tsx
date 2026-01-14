'use client';
import React, { useState } from 'react';
import { BrainCircuit, TrendingUp, DollarSign } from 'lucide-react';

export default function DashboardPage() {
  const [insight, setInsight] = useState('Haz clic para consultar al mentor...');

  return (
    <div className="p-8 bg-background min-h-screen text-foreground font-sans">
      <h2 className="text-3xl font-black italic mb-8 text-primary uppercase tracking-tight">Command Center</h2>
      
      {/* Tarjetas de Datos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-card p-6 rounded-[2rem] border border-border shadow-2xl hover:border-primary/20 transition-all">
          <DollarSign className="text-primary mb-2 w-8 h-8" />
          <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">Ventas Hoy</p>
          <h3 className="text-4xl font-black tracking-tight text-white">$450.000</h3>
        </div>
        <div className="bg-card p-6 rounded-[2rem] border border-border shadow-2xl hover:border-primary/20 transition-all">
          <TrendingUp className="text-primary mb-2 w-8 h-8" />
          <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">Gastos</p>
          <h3 className="text-4xl font-black tracking-tight text-white">$180.000</h3>
        </div>
      </div>

      {/* Sección del Mentor IA */}
      <div className="bg-primary/5 border border-primary/20 p-8 rounded-[2.5rem] shadow-2xl shadow-primary/5 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10 transition-all duration-700 group-hover:bg-primary/20" />
        
        <div className="flex items-center gap-4 mb-6">
          <BrainCircuit className="text-primary" size={32} />
          <h4 className="font-bold text-xl italic uppercase text-white">Mentor Financiero IA</h4>
        </div>
        <p className="text-zinc-400 italic mb-8 leading-relaxed max-w-2xl text-lg">
          &quot;{insight}&quot;
        </p>
        <button 
          onClick={() => setInsight("Analizando tendencias... El ROI proyectado para este mes es del 15% superior al anterior.")}
          className="bg-primary text-black px-10 py-4 rounded-full font-black text-xs hover:scale-105 transition-all uppercase italic shadow-lg shadow-primary/20"
        >
          Generar Estrategia
        </button>
      </div>
    </div>
  );
}