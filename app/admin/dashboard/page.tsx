"use client"

import {
    Activity,
    TrendingUp,
    DollarSign,
    ArrowUpRight,
    ShieldAlert,
    Cpu,
    BarChart3,
    Terminal
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
    { name: "00:00", ingresos: 4000, gastos: 2400 },
    { name: "04:00", ingresos: 3000, gastos: 1398 },
    { name: "08:00", ingresos: 2000, gastos: 9800 },
    { name: "12:00", ingresos: 2780, gastos: 3908 },
    { name: "16:00", ingresos: 1890, gastos: 4800 },
    { name: "20:00", ingresos: 2390, gastos: 3800 },
    { name: "23:59", ingresos: 3490, gastos: 4300 },
]

// Lógica de Cobro $100 COP (Config Object)
const SaaSConfig = {
    plan: "Híbrido",
    basePrice: 40000,
    feePerOrder: 100,
}

export default function AdminDashboard() {
    const totalOrders = 142
    const comisionPlataforma = totalOrders * SaaSConfig.feePerOrder

    return (
        <div className="min-h-screen bg-black text-primary p-6 lg:p-12 font-mono">
            {/* Dashboard Header */}
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16 border-b border-primary/10 pb-10">
                <div>
                    <div className="flex items-center gap-2 terminal-text mb-4 opacity-40">
                        <Terminal className="w-4 h-4" /> CMD_CENTER_ACCESS
                    </div>
                    <h1 className="text-5xl font-black uppercase italic tracking-tighter">Dashboard <span className="text-white">v2.6</span></h1>
                </div>
                <div className="flex gap-4">
                    <div className="command-card py-3 px-6 border-primary/40 bg-primary/5">
                        <p className="terminal-text opacity-40 mb-1">Fee Plataforma (Híbrido)</p>
                        <p className="text-2xl font-black italic">$ {comisionPlataforma.toLocaleString()}</p>
                    </div>
                </div>
            </header>

            {/* KPI Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                    { label: "Rev Totales", value: "$14.2M", icon: <DollarSign className="w-4 h-4" /> },
                    { label: "Margen Operativo", value: "32.4%", icon: <Activity className="w-4 h-4" /> },
                    { label: "Ordenes IA", value: totalOrders.toString(), icon: <Cpu className="w-4 h-4" /> },
                    { label: "Alertas Crit", value: "02", icon: <ShieldAlert className="w-4 h-4 text-red-500" /> },
                ].map((kpi, i) => (
                    <div key={i} className="command-card relative group">
                        <div className="absolute top-4 right-4 text-primary/20 group-hover:text-primary transition-colors">
                            {kpi.icon}
                        </div>
                        <p className="terminal-text opacity-40 mb-2">{kpi.label}</p>
                        <h3 className="text-3xl font-black italic">{kpi.value}</h3>
                    </div>
                ))}
            </div>

            {/* Main Chart Area */}
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 command-card min-h-[500px] flex flex-col">
                    <div className="flex justify-between items-center mb-10">
                        <div className="flex items-center gap-3">
                            <BarChart3 className="w-5 h-5" />
                            <span className="terminal-text">Flujo de Capital Intra-día</span>
                        </div>
                        <div className="flex gap-6 terminal-text opacity-40">
                            <span className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full" /> Ingresos</span>
                            <span className="flex items-center gap-2"><div className="w-2 h-2 bg-white rounded-full" /> Gastos</span>
                        </div>
                    </div>

                    <div className="flex-1 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorIngresos" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#10b981" opacity={0.05} vertical={false} />
                                <XAxis dataKey="name" hide />
                                <YAxis hide />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#000', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '0', fontSize: '10px', textTransform: 'uppercase' }}
                                    itemStyle={{ color: '#10b981' }}
                                />
                                <Area type="monotone" dataKey="ingresos" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorIngresos)" />
                                <Area type="monotone" dataKey="gastos" stroke="#ffffff" strokeWidth={1} fillOpacity={0} strokeDasharray="5 5" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* System Message Log */}
                <div className="command-card flex flex-col">
                    <h4 className="terminal-text mb-8 border-b border-primary/10 pb-4">Log de Sistema IA</h4>
                    <div className="space-y-6 overflow-y-auto pr-2 no-scrollbar">
                        {[
                            { t: "14:02", m: "Optimización de precios activa para 'Sushimi Elite'." },
                            { t: "12:45", m: "Alerta: El costo de carne subió un 12%. Ver Mentor IA." },
                            { t: "10:30", m: "Resumen matutino generado con éxito." },
                            { t: "09:00", m: "Uplink estable con Supabase DB." },
                        ].map((log, i) => (
                            <div key={i} className="flex gap-4 group">
                                <span className="text-[8px] opacity-20 group-hover:opacity-100 transition-opacity">{log.t}</span>
                                <p className="text-[10px] leading-relaxed group-hover:text-white transition-colors">>> {log.m}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-auto pt-8">
                        <button className="w-full border border-primary/20 py-4 text-[10px] uppercase font-black tracking-widest hover:bg-primary/5 transition-all">
                            Ver Reportes_Full
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
