"use client"

import {
    TrendingUp,
    DollarSign,
    BrainCircuit,
    Target,
    ShieldCheck,
    Cpu,
    ChevronRight,
    ArrowUpRight
} from "lucide-react"
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts"

const data = [
    { name: "Lun", ventas: 4200, margen: 2800 },
    { name: "Mar", ventas: 3800, margen: 2100 },
    { name: "Mie", ventas: 5400, margen: 3900 },
    { name: "Jue", ventas: 4900, margen: 3200 },
    { name: "Vie", ventas: 7800, margen: 5100 },
    { name: "Sab", ventas: 9200, margen: 6400 },
    { name: "Dom", ventas: 8100, margen: 5800 },
]

export default function FinanzasBrain() {
    return (
        <div className="min-h-screen bg-gradient-cryptify p-6 lg:p-10 font-sans text-white">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                            Finanzas
                        </span>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight mb-2">Cerebro <span className="text-emerald-400">IA</span></h1>
                    <p className="text-zinc-400 max-w-xl text-sm leading-relaxed">
                        Gestión de utilidad neta y proyecciones en tiempo real para imperios gastronómicos.
                    </p>
                </div>
                <div className="glass-panel px-6 py-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                        <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Estado</p>
                        <p className="text-sm font-bold text-white">Nivel Elite Activo</p>
                    </div>
                </div>
            </div>

            {/* Main KPI Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glass-panel p-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-20 text-emerald-500 group-hover:scale-110 transition-transform">
                        <DollarSign className="w-12 h-12" />
                    </div>
                    <div className="mb-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Margen de Contribución</p>
                        <h2 className="text-4xl font-bold tracking-tight text-white">$24.8M</h2>
                    </div>
                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-bold">
                        <TrendingUp className="w-3 h-3" /> +14.2%
                    </div>
                </div>

                <div className="glass-panel p-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 text-white group-hover:scale-110 transition-transform">
                        <Target className="w-12 h-12" />
                    </div>
                    <div className="mb-6">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 mb-4">
                            <Target className="w-5 h-5" />
                        </div>
                        <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Punto de Equilibrio</p>
                        <h2 className="text-3xl font-bold tracking-tight text-white">Día 12 <span className="text-lg text-zinc-500 font-medium">/ 30</span></h2>
                    </div>
                </div>

                <div className="glass-panel p-8 border-emerald-500/20 bg-emerald-900/10 relative overflow-hidden">
                    <div className="mb-6">
                        <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                            <Cpu className="w-5 h-5" />
                        </div>
                        <p className="text-xs font-bold uppercase tracking-widest text-emerald-400/60 mb-1">Fee Plataforma</p>
                        <h2 className="text-3xl font-bold tracking-tight text-emerald-400">$12,400</h2>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-emerald-500/50">Acumulado Mes</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
                {/* Big Chart Area */}
                <div className="lg:col-span-8 glass-panel p-8 min-h-[400px] flex flex-col">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-lg font-bold">Ventas vs Margen Real</h3>
                        <div className="flex gap-6">
                            <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
                                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Ingresos
                            </div>
                            <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
                                <span className="w-2 h-2 rounded-full bg-zinc-700" /> Costos
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full min-h-[300px]">
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
                                    contentStyle={{ backgroundColor: '#09090b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                                    itemStyle={{ color: '#10b981', fontWeight: 'bold' }}
                                />
                                <Area type="monotone" dataKey="ventas" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#primaryGlow)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* AI Mentor Sidebar */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="glass-panel p-8 border-emerald-500/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full pointer-events-none" />

                        <div className="flex items-center gap-3 mb-6 relative z-10">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                                <BrainCircuit className="w-5 h-5" />
                            </div>
                            <h4 className="font-bold text-lg">Alerta IA</h4>
                        </div>

                        <p className="text-sm leading-relaxed text-zinc-300 font-medium mb-6 relative z-10">
                            "Tu costo de carne subió un 12%. Si no ajustas el precio del <span className="text-emerald-400">Tomahawk Premium</span>, tu utilidad neta caerá por debajo del 18%."
                        </p>

                        <button className="w-full py-3 rounded-lg bg-emerald-500 text-black text-xs font-bold uppercase tracking-widest hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 group relative z-10">
                            Optimizar Precios <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="glass-panel p-8">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Insight Educativo</h4>
                            <ArrowUpRight className="w-4 h-4 text-zinc-600" />
                        </div>
                        <p className="font-bold text-lg italic mb-2 text-white">"El Margen no es Venta"</p>
                        <p className="text-xs leading-relaxed text-zinc-400">
                            Muchos cocineros se enfocan en vender más, pero un empresario se enfoca en que cada venta deje más utilidad.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
