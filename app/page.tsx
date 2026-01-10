"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts"
import {
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  ChevronRight,
  BrainCircuit,
  ShoppingBag,
  Users
} from "lucide-react"

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
    <div className="space-y-16 animate-in fade-in duration-700">
      {/* Welcome Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-primary mb-2">
            <Zap className="w-5 h-5 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60">System Online // Luxury Core</span>
          </div>
          <h1 className="text-7xl font-black tracking-tighter uppercase italic leading-none">Empire <span className="text-white/10">Dashboard</span></h1>
          <p className="text-xl text-white/40 font-medium max-w-2xl italic">"Su flujo de capital traducido en éxito estratégico."</p>
        </div>
        <div className="flex gap-4 w-full lg:w-auto">
          <div className="glass-card flex flex-col justify-center items-center py-6 px-12 border-primary/20 bg-primary/5 min-w-[280px]">
            <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Punto de Equilibrio</p>
            <h2 className="text-4xl font-black italic">Alcanzado</h2>
          </div>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: "Rev Totales", val: "$124.5M", icon: <DollarSign className="w-4 h-4" />, change: "+12.4%" },
          { label: "Clientes", val: "1,420", icon: <Users className="w-4 h-4" />, change: "+8.1%" },
          { label: "Ticket Prom", val: "$84.2k", icon: <ShoppingBag className="w-4 h-4" />, change: "-2.3%" },
          { label: "Net Profit", val: "38.5%", icon: <TrendingUp className="w-4 h-4" />, change: "+4.2%" },
        ].map((stat, i) => (
          <div key={i} className="glass-card hover:border-primary/40 group">
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40 group-hover:text-primary transition-all">
                {stat.icon}
              </div>
              <span className={`text-[10px] font-black ${stat.change.startsWith('+') ? 'text-primary' : 'text-red-500'}`}>{stat.change}</span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">{stat.label}</p>
            <h3 className="text-3xl font-black italic tracking-tighter">{stat.val}</h3>
          </div>
        ))}
      </div>

      {/* Big Chart Area */}
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 glass-card">
          <div className="flex justify-between items-center mb-10 border-b border-white/5 pb-6">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] flex items-center gap-3">
              <Activity className="w-4 h-4 text-primary" /> Auditoría de Flujo Diaria
            </h3>
            <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest opacity-40">
              <span className="flex items-center gap-2 underline decoration-primary/40">Ventas</span>
              <span className="flex items-center gap-2">Margen</span>
            </div>
          </div>
          <div className="h-[450px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="primaryGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip
                  contentStyle={{ backgroundColor: '#000', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '12px' }}
                  itemStyle={{ color: '#10b981', fontWeight: 'bold', fontSize: '12px', textTransform: 'uppercase' }}
                />
                <Area type="monotone" dataKey="ventas" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#primaryGlow)" />
                <Area type="monotone" dataKey="margen" stroke="#ffffff" strokeWidth={1} fillOpacity={0} strokeDasharray="5 5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="glass-card bg-primary/10 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <BrainCircuit className="w-10 h-10 text-primary" />
              <h4 className="font-black italic uppercase tracking-tighter text-xl underline decoration-primary/20">Mentor IA Elite</h4>
            </div>
            <p className="text-sm font-medium leading-relaxed italic text-white/80">
              "Su rentabilidad hoy fue del 38.5%. Mantenga el costo operativo bajo $2.5M para asegurar la expansión del próximo ciclo."
            </p>
            <button className="w-full mt-8 h-14 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:brightness-90 transition-all flex items-center justify-center gap-2 group">
              Explorar Cerebro IA <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </button>
          </div>

          <div className="glass-card border-none ring-1 ring-white/10 p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
              <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Status: Command Node Stable</p>
            </div>
            <p className="text-xs font-medium leading-relaxed opacity-60 italic">
              Configuración de Plan Híbrido Activo. Comisión de $100 COP por pedido sincronizada con Supabase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Activity(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}
