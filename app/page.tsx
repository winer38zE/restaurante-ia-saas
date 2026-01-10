"use client"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"
import {
  DollarSign,
  Users,
  ShoppingBag,
  TrendingUp,
  BrainCircuit,
  ArrowUpRight,
  Sparkles
} from "lucide-react"

import { GlassCard } from "@/components/ui/GlassCard"
import { ModernButton } from "@/components/ui/ModernButton"

const data = [
  { name: "Lun", ventas: 4200, margen: 2800 },
  { name: "Mar", ventas: 3800, margen: 2100 },
  { name: "Mie", ventas: 5400, margen: 3900 },
  { name: "Jue", ventas: 4900, margen: 3200 },
  { name: "Vie", ventas: 7800, margen: 5100 },
  { name: "Sab", ventas: 9200, margen: 6400 },
  { name: "Dom", ventas: 8100, margen: 5800 },
]

export default function RootDashboard() {
  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-2">
            Resumen General
          </h1>
          <p className="text-slate-400 text-lg">
            Bienvenido de nuevo. Tu flujo de caja es positivo hoy.
          </p>
        </div>
        <ModernButton icon={Sparkles}>
          Generar Reporte IA
        </ModernButton>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlassCard
          title="Ingresos Totales"
          value="$124.5M"
          trend="+12.4% vs mes pasado"
          trendUp={true}
          icon={<DollarSign className="w-5 h-5 text-emerald-400" />}
        />
        <GlassCard
          title="Clientes Activos"
          value="1,420"
          trend="+8.1% nuevos usuarios"
          trendUp={true}
          icon={<Users className="w-5 h-5 text-emerald-400" />}
        />
        <GlassCard
          title="Ticket Promedio"
          value="$84.2k"
          trend="-2.3% vs semana pasada"
          trendUp={false}
          icon={<ShoppingBag className="w-5 h-5 text-emerald-400" />}
        />
        <GlassCard
          title="Margen Neto"
          value="38.5%"
          trend="+4.2% optimización IA"
          trendUp={true}
          icon={<TrendingUp className="w-5 h-5 text-emerald-400" />}
        />
      </div>

      {/* Charts & AI Section */}
      <div className="grid lg:grid-cols-12 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-8 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-white">Flujo de Capital</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-sm text-slate-400">Ventas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <span className="text-sm text-slate-400">Margen</span>
              </div>
            </div>
          </div>

          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorVentas" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                  dy={10}
                />
                <YAxis hide />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                  itemStyle={{ color: '#fff', fontSize: '13px', fontWeight: 600 }}
                  labelStyle={{ display: 'none' }}
                />
                <Area
                  type="monotone"
                  dataKey="ventas"
                  stroke="#10b981"
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#colorVentas)"
                />
                <Area
                  type="monotone"
                  dataKey="margen"
                  stroke="#cbd5e1"
                  strokeWidth={2}
                  strokeOpacity={0.3}
                  fillOpacity={0}
                  strokeDasharray="4 4"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Insight Card */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="backdrop-blur-md bg-gradient-to-br from-emerald-900/40 to-slate-900/40 border border-emerald-500/30 rounded-2xl p-8 relative overflow-hidden group">
            {/* Glow effect */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-all duration-700"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30">
                  <BrainCircuit className="w-6 h-6 text-emerald-400" />
                </div>
                <h4 className="font-bold text-xl text-white">Mentor IA</h4>
              </div>

              <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                "La rentabilidad del 38.5% esta por encima del promedio. Sugiero reinvertir el excedente ($2.5M) en marketing para la campaña de fin de semana."
              </p>

              <button className="w-full py-4 rounded-xl bg-white text-emerald-950 font-bold hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2 group/btn">
                Ver Análisis Completo
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </button>
            </div>
          </div>

          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-sm font-medium text-slate-400">Sistema: <span className="text-emerald-400">Online</span></span>
            </div>
            <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">v3.0.1 Stable</span>
          </div>
        </div>
      </div>
    </div>
  )
}
