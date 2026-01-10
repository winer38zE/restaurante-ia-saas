"use client"

import {
    TrendingUp,
    DollarSign,
    Target,
    Lightbulb,
    ArrowUpRight,
    PieChart as PieChartIcon,
    ShieldCheck,
    Zap
} from "lucide-react"
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts"
import { EducationalCard } from "@/components/EducationalCard"

const data = [
    { name: "Lun", ventas: 4000, margen: 2400 },
    { name: "Mar", ventas: 3000, margen: 1398 },
    { name: "Mie", ventas: 2000, margen: 9800 },
    { name: "Jue", ventas: 2780, margen: 3908 },
    { name: "Vie", ventas: 1890, margen: 4800 },
    { name: "Sab", ventas: 2390, margen: 3800 },
    { name: "Dom", ventas: 3490, margen: 4300 },
]

export default function FinanzasPage() {
    return (
        <div className="max-w-7xl mx-auto space-y-16 py-12 px-8 selection:bg-primary/20">
            {/* Header Elite */}
            <div className="flex flex-col md:row justify-between items-start md:items-end gap-6">
                <div>
                    <h1 className="text-5xl font-black tracking-tighter mb-2">Estado de Salud</h1>
                    <p className="text-xl text-foreground/40 font-medium">De Dueño de Restaurante a <span className="text-primary italic">Empresario Gastronómico</span>.</p>
                </div>
                <div className="bg-primary/10 border border-primary/20 px-6 py-3 rounded-2xl flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    <span className="text-xs font-black uppercase tracking-widest text-primary">Nivel Premium Activo</span>
                </div>
            </div>

            {/* KPI Minimalist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="elite-card">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                            <DollarSign className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg">+12% vs mes ant.</span>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-foreground/30 mb-1">Margen de Utilidad</p>
                    <h2 className="text-4xl font-black tracking-tighter">24.8%</h2>
                </div>

                <div className="elite-card">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 rounded-2xl bg-secondary/10 text-secondary">
                            <Zap className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-bold text-foreground/40 px-2 py-1 rounded-lg">Cálculo en Tiempo Real</span>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-foreground/30 mb-1">Punto de Equilibrio</p>
                    <h2 className="text-4xl font-black tracking-tighter">$8.4M <span className="text-sm font-medium text-foreground/20">/ mes</span></h2>
                </div>

                <div className="elite-card bg-primary text-white border-none shadow-2xl shadow-primary/20">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 rounded-2xl bg-white/20">
                            <Target className="w-6 h-6" />
                        </div>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-1">Meta de Utilidad</p>
                    <h2 className="text-4xl font-black tracking-tighter">85% Alcanzado</h2>
                    <div className="mt-6 h-1 w-full bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-white w-[85%] rounded-full" />
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Health Chart */}
                <div className="lg:col-span-2 elite-card">
                    <div className="mb-10">
                        <h3 className="text-2xl font-black tracking-tight flex items-center gap-3">
                            Tendencia de Utilidad
                            <ArrowUpRight className="w-5 h-5 text-primary" />
                        </h3>
                    </div>
                    <div className="h-[400px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.4} />
                                        <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#475569', fontSize: 12, fontWeight: 700 }} />
                                <YAxis hide />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '1rem' }}
                                    itemStyle={{ color: '#f8fafc', fontSize: '12px', fontWeight: 'bold' }}
                                />
                                <Area type="monotone" dataKey="ventas" stroke="var(--primary)" strokeWidth={4} fillOpacity={1} fill="url(#colorPrimary)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* AI Sidebar & Education */}
                <div className="space-y-8">
                    <div className="elite-card border-secondary/20 bg-secondary/5">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                                <Lightbulb className="w-5 h-5" />
                            </div>
                            <h4 className="font-bold text-xl tracking-tight text-secondary">Consejos del Asistente IA</h4>
                        </div>
                        <div className="space-y-6">
                            <p className="text-sm leading-relaxed text-foreground/70 font-medium">
                                "Tus costos de insumos han subido un 8% esta semana. El plato <span className="text-secondary font-black">Ribeye Premium</span> está diluyendo tu margen bruto."
                            </p>
                            <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold italic">
                                Sugerencia: Cambia el proveedor de cárnicos o ajusta el precio de venta a $42.000.
                            </div>
                        </div>
                    </div>

                    <EducationalCard
                        title="¿Qué es el Margen de Utilidad?"
                        definition="Es el porcentaje de ingresos que queda después de pagar todos los gastos del negocio."
                        example="Si vendes $1.000 y tus gastos son $750, tu utilidad es $250 (25%)."
                    />
                </div>
            </div>
        </div>
    )
}
