'use client';
import React, { useState } from 'react';
import { obtenerConsejoIA } from '@/lib/groq';
import { BrainCircuit, TrendingUp, DollarSign, Users } from 'lucide-react';

export default function RootDashboard() {
  const [consejo, setConsejo] = useState("Haz clic para recibir mentoría estratégica...");
  const [loading, setLoading] = useState(false);

  const consultarIA = async () => {
    setLoading(true);
    try {
      // Usamos datos de ejemplo para la prueba local
      const res = await obtenerConsejoIA(1254592, 450000);
      setConsejo(res || "Error al obtener análisis.");
    } catch (err) {
      setConsejo("Verifica tu API Key en el archivo .env.local");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <header className="mb-12 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tighter italic">EMPIRE DASHBOARD</h1>
          <p className="text-emerald-500 font-mono text-sm">SYSTEM ONLINE v2.0.26</p>
        </div>
        <button 
          onClick={consultarIA}
          disabled={loading}
          className="bg-emerald-500 text-black px-8 py-3 rounded-full font-black hover:scale-105 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)]"
        >
          {loading ? "ANALIZANDO..." : "CONSULTAR MENTOR IA"}
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-[2rem] backdrop-blur-xl">
          <TrendingUp className="text-emerald-500 mb-4" />
          <p className="text-zinc-500 text-xs uppercase font-black">Total Revenue</p>
          <h3 className="text-4xl font-bold">$124,592.00</h3>
          <span className="text-emerald-400 text-xs">+12.4% vs last month</span>
        </div>
        {/* Agrega más tarjetas aquí siguiendo el mismo estilo */}
      </div>

      <div className="bg-gradient-to-br from-zinc-900 to-black border border-emerald-500/20 p-10 rounded-[3rem]">
        <div className="flex items-center gap-4 mb-6">
          <BrainCircuit className="text-emerald-500" size={32} />
          <h2 className="text-2xl font-bold italic">INSIGHTS DEL MENTOR</h2>
        </div>
        <p className="text-zinc-400 text-lg leading-relaxed italic border-l-4 border-emerald-500 pl-6">
          "{consejo}"
        </p>
      </div>
    </div>
  );
}