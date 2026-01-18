'use client';
import React, { useState } from 'react';
import { BrainCircuit, TrendingUp, DollarSign } from 'lucide-react';

export default function DashboardPage() {
  const [insight, setInsight] = useState('Haz clic para consultar al mentor...');

  return (
    <div className="p-8 bg-background min-h-screen text-foreground font-sans">
      <h2 className="text-2xl font-bold mb-8 text-foreground tracking-tight">Command Center</h2>
      
      {/* Tarjetas de Datos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-card p-6 rounded-lg border border-border transition-all hover:border-primary/50">
          <DollarSign className="text-primary mb-2 w-6 h-6" />
          <p className="text-muted-foreground text-sm font-medium">Ventas Hoy</p>
          <h3 className="text-3xl font-bold tracking-tight text-foreground">$450.000</h3>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border transition-all hover:border-primary/50">
          <TrendingUp className="text-primary mb-2 w-6 h-6" />
          <p className="text-muted-foreground text-sm font-medium">Gastos</p>
          <h3 className="text-3xl font-bold tracking-tight text-foreground">$180.000</h3>
        </div>
      </div>

      {/* Sección del Mentor IA */}
      <div className="bg-primary/5 border border-primary/10 p-8 rounded-xl relative overflow-hidden">
        
        <div className="flex items-center gap-3 mb-6">
          <BrainCircuit className="text-primary" size={24} />
          <h4 className="font-bold text-lg text-foreground">Mentor Financiero IA</h4>
        </div>
        <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl text-base">
          {insight}
        </p>
        <button 
          onClick={() => setInsight("Analizando tendencias... El ROI proyectado para este mes es del 15% superior al anterior.")}
          className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium text-sm hover:opacity-90 transition-all shadow-sm"
        >
          Generar Estrategia
        </button>
      </div>
    </div>
  );
}