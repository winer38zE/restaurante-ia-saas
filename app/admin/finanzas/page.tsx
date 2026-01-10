"use client"

import {
    TrendingUp,
    DollarSign,
    BrainCircuit,
    Target,
    ArrowUpRight,
    ShieldCheck,
    Cpu,
    Zap,
    ChevronRight
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
        <div className="max-w-7xl mx-auto space-y-12">
            {/* Header Luxury */}
            <div className="flex flex-col md:row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-10">
                <div>
                    <h1 className="text-6xl font-black tracking-tighter glow-text">Cerebro <span className="text-primary italic">IA</span></h1>
                    <p className="text-lg text-white/40 font-medium mt-2">Gestión de utilidad neta para imperios gastronómicos.</p>
                </div>
                <div className="flex gap-4">
                    <div className="px-6 py-3 rounded-full border border-primary/20 bg-primary/5 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary">Nivel Elite Activo</span>
                    </div>
                </div>
            </div>

            {/* Main KPI Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="luxury-card neon-border">
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <DollarSign className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-black text-primary">+14.2%</span>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Margen de Contribución</p>
                    <h2 className="text-4xl font-black tracking-tighter">$24,800,000</h2>
                </div>

                <div className="luxury-card">
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40">
                            <Target className="w-6 h-6" />
                        </div>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Punto de Equilibrio</p>
                    <h2 className="text-4xl font-black tracking-tighter">Día 12 <span className="text-sm font-medium text-white/10">del mes</span></h2>
                </div>

                <div className="luxury-card border-none bg-primary text-black">
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center">
                            <Cpu className="w-6 h-6" />
                        </div>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-1">Fee de Plataforma ($100)</p>
                    <h2 className="text-4xl font-black tracking-tighter">$12,400 <span className="text-sm font-medium opacity-40">acumulado</span></h2>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-10">
                {/* Big Chart Area */}
                <div className="lg:col-span-8 luxury-card min-h-[500px]">
                    <div className="flex justify-between items-center mb-10">
                        <h3 className="text-xl font-bold tracking-tight">Ventas vs Margen Real</h3>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-primary" />
                                <span className="text-[8px] font-black uppercase tracking-widest text-white/40">Ingresos</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-white/20" />
                                <span className="text-[8px] font-black uppercase tracking-widest text-white/40">Costos</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-[400px] w-full">
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
                                    contentStyle={{ backgroundColor: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                                    itemStyle={{ color: '#10b981', fontWeight: 'bold' }}
                                />
                                <Area type="monotone" dataKey="ventas" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#primaryGlow)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* AI Mentor Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="luxury-card border-primary/20 bg-primary/5">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <BrainCircuit className="w-5 h-5" />
                            </div>
                            <h4 className="font-bold text-lg tracking-tight">Mentoría IA Elite</h4>
                        </div>
                        <p className="text-sm leading-relaxed text-white/70 font-medium">
                            "Tu costo de carne subió un 12% esta semana. Si no ajustas el precio del <span className="text-primary italic">Tomahawk Premium</span>, tu utilidad neta caerá por debajo del 18%."
                        </p>
                        <div className="mt-8 pt-6 border-t border-white/5">
                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4">Acción Recomendada</p>
                            <button className="w-full h-12 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-white/90 transition-all flex items-center justify-center gap-2 group">
                                Optimizar Precios <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
                            </button>
                        </div>
                    </div>

                    <div className="luxury-card">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-6">Píldora Educativa</h4>
                        <p className="font-bold text-lg italic mb-2">"El Margen no es Venta"</p>
                        <p className="text-xs leading-relaxed text-white/40">
                            Muchos cocineros se enfocan en vender más, pero un empresario se enfoca en que cada venta deje más utilidad. No seas solo un cocinero, sé un estratega.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
