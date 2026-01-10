"use client"

import {
    TrendingUp,
    DollarSign,
    Target,
    Shield,
    Users,
    ArrowUpRight,
    ArrowDownRight,
    Bell,
    Settings,
    Search
} from "lucide-react"
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts"

const data = [
    { name: "00:00", value: 4000 },
    { name: "04:00", value: 3000 },
    { name: "08:00", value: 5000 },
    { name: "12:00", value: 2780 },
    { name: "16:00", value: 6890 },
    { name: "20:00", value: 8390 },
    { name: "23:59", value: 9490 },
]

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-gradient-cryptify text-white p-6 lg:p-8 font-sans">
            {/* Vercel Deployment Verification: 2026-01-10 - Syntax Verified Clean */}
            {/* Top Navigation Bar */}
            <header className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                        <Target className="text-black w-6 h-6" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-gradient">Santuario<span className="text-emerald-500">.io</span></h1>
                        <p className="text-xs text-zinc-400 tracking-wider uppercase font-medium">Enterprise Dashboard</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-white/[0.03] p-1.5 rounded-full border border-white/10 backdrop-blur-md">
                    <div className="px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                        Estado: Operativo
                    </div>
                    <button className="p-2 hover:bg-white/5 rounded-full transition-colors text-zinc-400 hover:text-white">
                        <Search className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-white/5 rounded-full transition-colors text-zinc-400 hover:text-white">
                        <Bell className="w-5 h-5" />
                    </button>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-white/10" />
                </div>
            </header>

            {/* Hero Section */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <div className="lg:col-span-2">
                    <div className="mb-8">
                        <h2 className="text-4xl md:text-5xl font-medium mb-4 leading-tight">
                            Master your <br />
                            <span className="text-gradient-primary font-bold">Business Intelligence</span>
                        </h2>
                        <p className="text-zinc-400 max-w-md text-lg">
                            Navega la complejidad de tu operación con métricas en tiempo real y guía estratégica de IA.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300">
                            Ver Reporte
                        </button>
                        <button className="px-8 py-3 rounded-full font-bold text-white border border-white/20 hover:bg-white/5 transition-colors">
                            Configuración
                        </button>
                    </div>
                </div>

                {/* Main Trend Card */}
                <div className="glass-panel p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div className="mb-6">
                        <p className="text-sm text-zinc-500 uppercase tracking-wider font-medium mb-1">Rendimiento Actual</p>
                        <div className="flex items-end gap-3">
                            <h3 className="text-3xl font-bold text-white">$14,240.00</h3>
                            <span className="text-emerald-500 text-sm font-bold bg-emerald-500/10 px-2 py-0.5 rounded mb-1">+5.6%</span>
                        </div>
                    </div>

                    <div className="h-[120px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorEmerald" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <Area type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorEmerald)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                    { label: "Ingresos Totales", value: "$42.5K", trend: "+12%", icon: DollarSign },
                    { label: "Usuarios Activos", value: "1,240", trend: "+8.1%", icon: Users },
                    { label: "Salud del Sistema", value: "98.2%", trend: "+2.4%", icon: Shield },
                    { label: "Crecimiento IA", value: "+24%", trend: "Auto", icon: TrendingUp },
                ].map((stat, i) => (
                    <div key={i} className="glass-panel p-6 flex flex-col justify-between min-h-[160px]">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 rounded-xl bg-white/5 text-emerald-400">
                                <stat.icon className="w-5 h-5" />
                            </div>
                            <span className="text-emerald-500 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded-full">
                                {stat.trend}
                            </span>
                        </div>
                        <div>
                            <p className="text-zinc-500 text-xs uppercase tracking-wider font-medium mb-1">{stat.label}</p>
                            <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Sections */}
            <div className="grid lg:grid-cols-2 gap-8">
                {/* News / Strategies */}
                <div className="glass-panel p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />

                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold">Estrategias IA</h3>
                        <div className="flex gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span className="w-2 h-2 rounded-full bg-zinc-700" />
                            <span className="w-2 h-2 rounded-full bg-zinc-700" />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex gap-4 items-center group cursor-pointer hover:bg-white/5 p-4 -mx-4 rounded-xl transition-colors">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex-shrink-0 flex items-center justify-center text-2xl font-bold text-white/50">
                                01
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1 group-hover:text-emerald-400 transition-colors">Optimización de Menú</h4>
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    Nuestros algoritmos sugieren reducir un 15% el inventario de perecederos esta semana.
                                </p>
                            </div>
                            <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-emerald-400 ml-auto" />
                        </div>

                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300 w-3/4" />
                        </div>
                        <div className="flex justify-between text-xs text-zinc-500 uppercase tracking-wider">
                            <span>Progreso de implementación</span>
                            <span className="text-emerald-400">75%</span>
                        </div>
                    </div>
                </div>

                {/* Investment Growth / Extra */}
                <div className="glass-panel p-8 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent pointer-events-none" />

                    <div className="mb-auto">
                        <h3 className="text-xl font-bold mb-2">Proyección Financiera</h3>
                        <p className="text-zinc-400 text-sm">Crecimiento estimado basado en tendencias actuales.</p>
                    </div>

                    <div className="flex items-end gap-2 mt-8">
                        <span className="text-4xl font-bold text-white">+15%</span>
                        <span className="text-zinc-500 mb-1">vs mes anterior</span>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <div className="flex-1 h-32 rounded-xl bg-white/5 border border-white/5 relative overflow-hidden p-4 hover:border-emerald-500/30 transition-colors group">
                            <p className="text-xs text-zinc-500 uppercase">Conservador</p>
                            <p className="text-xl font-bold mt-1">$45k</p>
                            <div className="absolute bottom-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                                <ArrowDownRight className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="flex-1 h-32 rounded-xl bg-emerald-500/10 border border-emerald-500/20 relative overflow-hidden p-4 group">
                            <p className="text-xs text-emerald-300 uppercase">Agresivo</p>
                            <p className="text-xl font-bold mt-1 text-emerald-400">$62k</p>
                            <div className="absolute bottom-0 right-0 p-3">
                                <ArrowUpRight className="w-6 h-6 text-emerald-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
