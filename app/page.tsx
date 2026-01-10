"use client"

import {
  BarChart3,
  ArrowUpRight,
  DollarSign,
  Users,
  ShoppingBag,
  Zap,
  TrendingUp,
  BrainCircuit,
  Settings
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="space-y-16">
      {/* Welcome Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-primary mb-4 p-1 px-3 bg-primary/5 border border-primary/20 rounded-full w-fit">
            <Zap className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Comando Central Online</span>
          </div>
          <h1 className="text-7xl font-black tracking-tighter uppercase italic leading-none">Resumen de <span className="text-secondary/20">Ventas</span></h1>
          <p className="text-xl text-white/40 font-medium">Gestionando su imperio gastronómico en tiempo real.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
          <div className="glass-card flex flex-col justify-center items-center py-6 px-10 border-primary/20 bg-primary/5 min-w-[240px]">
            <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Utilidad Hoy</p>
            <h2 className="text-4xl font-black italic">$2.4M</h2>
          </div>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: "Rev Totales", val: "$124.5M", icon: <DollarSign className="w-4 h-4" />, change: "+12.4%" },
          { label: "Cubiertos", val: "1,420", icon: <Users className="w-4 h-4" />, change: "+8.1%" },
          { label: "Ticket Prom", val: "$84.2k", icon: <ShoppingBag className="w-4 h-4" />, change: "-2.3%" },
          { label: "Eficiencia", val: "94.2%", icon: <TrendingUp className="w-4 h-4" />, change: "+0.5%" },
        ].map((stat, i) => (
          <div key={i} className="glass-card hover:border-primary/40 group">
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40 group-hover:text-primary transition-all">
                {stat.icon}
              </div>
              <span className={`text-[10px] font-black ${stat.change.startsWith('+') ? 'text-primary' : 'text-red-500'}`}>{stat.change}</span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">{stat.label}</p>
            <h3 className="text-2xl font-black italic">{stat.val}</h3>
          </div>
        ))}
      </div>

      {/* Quick Access Tiles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Link href="/finanzas" className="glass-card group hover:scale-[1.01] transition-all h-[300px] flex flex-col justify-between overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
            <TrendingUp className="w-40 h-40" />
          </div>
          <div className="space-y-2 relative z-10">
            <h3 className="text-4xl font-black italic uppercase italic tracking-tighter">Analizar Rentabilidad</h3>
            <p className="text-white/40 text-sm font-medium uppercase tracking-widest">Ingrese al cerebro financiero</p>
          </div>
          <div className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest relative z-10">
            Explorar Ahora <ArrowUpRight className="w-4 h-4" />
          </div>
        </Link>

        <Link href="/mentor-ia" className="glass-card group hover:scale-[1.01] transition-all h-[300px] flex flex-col justify-between overflow-hidden relative border-primary/20 bg-primary/5">
          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity text-primary">
            <BrainCircuit className="w-40 h-40" />
          </div>
          <div className="space-y-2 relative z-10">
            <h3 className="text-4xl font-black italic uppercase italic tracking-tighter">ConsultarIA</h3>
            <p className="text-primary/40 text-sm font-medium uppercase tracking-widest">Mentoría estratégica personalizada</p>
          </div>
          <div className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest relative z-10">
            Obtener Insight <ArrowUpRight className="w-4 h-4" />
          </div>
        </Link>
      </div>
    </div>
  )
}
