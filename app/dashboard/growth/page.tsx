"use client"

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    AreaChart,
    Area
} from "recharts"
import {
    TrendingUp,
    Target,
    Lightbulb,
    ArrowRight,
    ShieldCheck,
    TrendingDown
} from "lucide-react"

const data = [
    { name: "Sem 1", ingresos: 4000, gastos: 2400 },
    { name: "Sem 2", ingresos: 3000, gastos: 1398 },
    { name: "Sem 3", ingresos: 2000, gastos: 9800 },
    { name: "Sem 4", ingresos: 2780, gastos: 3908 },
]

const trends = [
    { label: "Margen Neto", value: "24.5%", change: "+2.1%", icon: TrendingUp, color: "text-primary" },
    { label: "Costo de Insumos", value: "32.0%", change: "-1.5%", icon: TrendingDown, color: "text-emerald-500" },
]

export default function GrowthPage() {
    return (
        <div className="space-y-10 max-w-7xl mx-auto pb-20">
            <div>
                <h1 className="text-4xl font-black tracking-tighter">Crecimiento Financiero</h1>
                <p className="text-foreground/40 mt-2 text-lg">Tu mentor financiero impulsado por IA para un negocio sostenible.</p>
            </div>

            {/* Primary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trends.map((item, i) => (
                    <div key={i} className="p-8 rounded-[2.5rem] bg-card border border-border group hover:border-primary/20 transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                                <item.icon className={`w-6 h-6 ${item.color}`} />
                            </div>
                            <span className={`text-sm font-bold px-3 py-1 rounded-full ${item.change.startsWith('+') ? 'bg-emerald-500/10 text-emerald-500' : 'bg-primary/10 text-primary'}`}>
                                {item.change}
                            </span>
                        </div>
                        <p className="text-sm font-medium text-foreground/40">{item.label}</p>
                        <h2 className="text-4xl font-black mt-1 tracking-tighter">{item.value}</h2>
                    </div>
                ))}

                <div className="p-8 rounded-[2.5rem] bg-primary text-white flex flex-col justify-between group overflow-hidden relative">
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                    <div>
                        <p className="text-sm font-bold text-white/60">Salud Financiera</p>
                        <h2 className="text-3xl font-black mt-1">Óptima</h2>
                    </div>
                    <button className="flex items-center gap-2 font-bold text-sm bg-white/20 px-4 py-2 rounded-xl backdrop-blur-md self-start hover:bg-white/30 transition-all">
                        Ver Diagnóstico <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Chart */}
                <div className="lg:col-span-2 p-8 rounded-[3rem] bg-card border border-border">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h3 className="text-2xl font-bold">Ingresos vs Gastos</h3>
                            <p className="text-sm text-foreground/40">Análisis comparativo mensual</p>
                        </div>
                    </div>
                    <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorIngresos" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--foreground)', opacity: 0.4, fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: '1.5rem', border: '1px solid var(--border)' }}
                                    itemStyle={{ color: 'var(--foreground)' }}
                                />
                                <Area type="monotone" dataKey="ingresos" stroke="var(--primary)" fillOpacity={1} fill="url(#colorIngresos)" strokeWidth={4} />
                                <Area type="monotone" dataKey="gastos" stroke="var(--border)" fill="transparent" strokeWidth={2} strokeDasharray="5 5" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* AI Agent Sidebar */}
                <div className="space-y-6">
                    <div className="p-8 rounded-[2.5rem] bg-secondary/30 border border-border relative">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
                                <Lightbulb className="w-5 h-5 shadow-lg shadow-white/20" />
                            </div>
                            <h4 className="font-bold text-xl">Insights de IA</h4>
                        </div>
                        <div className="space-y-6 text-sm leading-relaxed text-foreground/70">
                            <p>
                                <span className="text-primary font-bold">Resumen:</span> Tu margen de utilidad neta ha bajado un 5% debido al incremento del costo de la proteína (Wagyu).
                            </p>
                            <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 text-primary italic font-medium">
                                "Considera ajustar el precio de tu hamburguesa estrella un 8% o buscar un proveedor local para reducir costos logísticos."
                            </div>
                        </div>
                    </div>

                    <div className="p-8 rounded-[2.5rem] border border-primary/20 bg-primary/5 group hover:bg-primary/10 transition-all cursor-pointer">
                        <div className="flex items-center gap-3 mb-4">
                            <Target className="w-5 h-5 text-primary" />
                            <h4 className="font-bold">Reto de la Semana</h4>
                        </div>
                        <p className="text-sm text-foreground/60 mb-6">Reduce el desperdicio de cocina un 3% mediante una mejor gestión de inventario.</p>
                        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[65%] rounded-full shadow-lg shadow-primary/30" />
                        </div>
                        <div className="flex justify-between mt-2 text-[10px] font-black uppercase tracking-widest text-primary">
                            <span>Progreso</span>
                            <span>65%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
