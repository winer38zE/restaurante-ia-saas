'use client';
import React from 'react';
import { BrainCircuit } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-emerald-500/10 p-4 rounded-3xl border border-emerald-500/20 mb-8">
        <BrainCircuit className="text-emerald-500" size={48} />
      </div>
      <h1 className="text-6xl font-black italic tracking-tighter mb-4">ED NET PRO</h1>
      <p className="text-zinc-500 max-w-md mb-10 uppercase tracking-widest text-xs font-bold">
        Arquitectura de Soluciones con IA
      </p>
      <a href="/dashboard" className="bg-white text-black px-10 py-4 rounded-full font-black hover:bg-emerald-500 hover:text-white transition-all">
        ENTRAR AL SISTEMA
      </a>
    </div>
  );
}