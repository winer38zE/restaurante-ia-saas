"use client"

import {
    TrendingUp,
    ArrowUpRight,
    BarChart3,
    Wallet,
    Terminal as TerminalIcon,
    ShieldCheck,
    Zap,
    BookOpen,
    Activity
} from "lucide-react"
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar
} from "recharts"

const data = [
    { time: "00:00", value: 400 },
    { time: "04:00", value: 300 },
    { time: "08:00", value: 600 },
    { time: "12:00", value: 800 },
    { time: "16:00", value: 500 },
    { time: "20:00", value: 900 },
    { time: "23:59", value: 750 },
]

export default function ContabilidadTerminal() {
    return (
        <div className="space-y-12 max-w-[1600px] mx-auto">
            {/* Trading Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                <div>
                    <div className="flex items-center gap-2 text-primary mb-2">
                        <TerminalIcon className="w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Finacial Command Center</span>
                    </div>
                    <h1 className="text-6xl font-black tracking-tighter uppercase italic">Terminal <span className="text-secondary/20">v2.0</span></h1>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full lg:w-auto">
                    {[
                        { label: "Rev 24h", value: "$14.2M", change: "+4.2%" },
                        { label: "Margin", value: "32.5%", change: "+0.8%" },
                        { label: "Fees", value: "$1.2k", change: "-2.1%" },
                        { label: "Net", value: "$9.4M", change: "+12.0%" },
                    ].map((stat, i) => (
                        <div key={i} className="glass-luxury p-4 border-white/5 min-w-[140px]">
                            <p className="text-[8px] font-bold text-secondary uppercase tracking-widest mb-1">{stat.label}</p>
                            <div className="flex items-end justify-between">
                                <p className="text-xl font-black">{stat.value}</p>
                                <p className="text-[10px] text-primary font-bold">{stat.change}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-10">
                {/* Main Trading Chart */}
                <div className="lg:col-span-8 premium-card border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8">
                        <div className="flex gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full glow-emerald" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Live Stream</span>
                        </div>
                    </div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary/40 mb-10 flex items-center gap-2">
                        <Activity className="w-3 h-3" /> Flow de Capital Intra-día
                    </h3>
                    <div className="h-[450px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="neonEmerald" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="time" hide />
                                <YAxis hide />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#050505', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '0' }}
                                    itemStyle={{ color: '#10b981', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}
                                    cursor={{ stroke: '#10b981', strokeWidth: 1, strokeDasharray: '4 4' }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#10b981"
                                    strokeWidth={2}
                                    fillOpacity={1}
                                    fill="url(#neonEmerald)"
                                    animationDuration={2000}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex justify-between mt-8 border-t border-white/5 pt-6 text-[10px] font-bold text-secondary/30 uppercase tracking-[0.2em]">
                        <span>00:00 UTC</span>
                        <span>12:00 UTC</span>
                        <span>23:59 UTC</span>
                    </div>
                </div>

                {/* Education & Micro-lessons */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="premium-card bg-primary/5 border-primary/20">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary flex items-center gap-2 mb-6">
                            <BookOpen className="w-4 h-4" /> Micro-Lección v.1
                        </h4>
                        <div className="space-y-4">
                            <h5 className="text-xl font-black italic">¿Qué es el Punto de Equilibrio?</h5>
                            <p className="text-sm text-secondary leading-relaxed font-medium">
                                Es la coordenada exacta donde tus ventas cubren el 100% de tus costos operativos. Cada peso después de este punto es utilidad neta.
                            </p>
                            <div className="bg-black/40 border border-white/5 p-4 rounded-sm">
                                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Métrica Sugerida</p>
                                <p className="text-sm font-medium">Monitorea tu Break-even el día 15 de cada mes.</p>
                            </div>
                        </div>
                    </div>

                    <div className="premium-card border-white/5">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary flex items-center gap-2 mb-6">
                            <Zap className="w-4 h-4" /> Smart-Hybrid Plan
                        </h4>
                        <div className="space-y-4">
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-[10px] uppercase font-bold text-secondary/40">Base Mensual</span>
                                <span className="text-[10px] uppercase font-bold">$40.000 COP</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-[10px] uppercase font-bold text-secondary/40">Comisión/Venta</span>
                                <span className="text-[10px] uppercase font-bold">$100 COP</span>
                            </div>
                            <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-center">
                                <p className="text-[8px] font-black uppercase tracking-widest text-primary mb-1">Fee Total Acumulado</p>
                                <p className="text-2xl font-black text-primary">$12.400</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
