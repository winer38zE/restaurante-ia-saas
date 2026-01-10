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
    BrainCircuit
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

// SaaS Logic Object
const SaaSConfig = {
    planes: {
        basico: { name: "Básico", price: 59000 },
        premium: { name: "Premium", price: 119000 },
        hibrido: { name: "Híbrido Inteligente", price: 40000, perOrder: 100 }
    }
}

export default function FinanzasPage() {
    const totalOrders = 124
    const calcularComisionPlataforma = (orders: number) => orders * SaaSConfig.planes.hibrido.perOrder
    const platformFee = calcularComisionPlataforma(totalOrders)

    return (
        <div className="space-y-12">
            <div className="flex justify-between items-end border-b border-white/5 pb-10">
                <div>
                    <h1 className="text-5xl font-black tracking-tighter uppercase italic">El Cerebro <span className="text-primary italic">Empresarial</span></h1>
                    <p className="text-white/40 font-medium mt-2">Visión 360 de rentabilidad y utilidad neta.</p>
                </div>
                <div className="flex gap-4">
                    <div className="px-6 py-3 rounded-xl bg-primary/5 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                        <Zap className="w-4 h-4" /> Plan Híbrido Activo
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass-card">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-white/30 mb-2">Margen Promedio</p>
                    <div className="flex justify-between items-end">
                        <h2 className="text-4xl font-black italic">38.4%</h2>
                        <span className="text-primary font-bold text-xs flex items-center gap-1">+4.2% <ArrowUpRight className="w-3 h-3" /></span>
                    </div>
                </div>
                <div className="glass-card">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-white/30 mb-2">Ventas de la Semana</p>
                    <div className="flex justify-between items-end">
                        <h2 className="text-4xl font-black italic">$42.8M</h2>
                    </div>
                </div>
                <div className="glass-card border-primary/40 bg-primary/5">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-2">Comisión Plataforma ($100)</p>
                    <div className="flex justify-between items-end">
                        <h2 className="text-4xl font-black italic">$ {platformFee.toLocaleString()}</h2>
                        <span className="text-xs font-bold opacity-30 uppercase tracking-widest">{totalOrders} Pedidos</span>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-8 glass-card min-h-[500px]">
                    <h3 className="text-lg font-bold uppercase tracking-widest mb-10 flex items-center gap-3 border-b border-white/5 pb-4">
                        <TrendingUp className="w-5 h-5 text-primary" /> Histórico de Utilidad
                    </h3>
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
                                    contentStyle={{ backgroundColor: '#000', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '12px' }}
                                    itemStyle={{ color: '#10b981', fontWeight: 'bold', fontSize: '12px' }}
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
                            <h4 className="font-black italic uppercase tracking-tighter text-xl">Mentor IA Elite</h4>
                        </div>
                        <p className="text-sm font-medium leading-relaxed italic text-white/80">
                            "Doña Juana, su ganancia real hoy fue del 40%. Para ser empresaria, mantenga el costo de insumos bajo los $2.5M semanales para asegurar su expansión el próximo mes."
                        </p>
                        <button className="w-full mt-8 h-12 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-lg hover:brightness-90 transition-all flex items-center justify-center gap-2">
                            Ver Plan de Acción <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="glass-card">
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-8">Estrategia de Precios</p>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-xs">
                                <span className="opacity-40 uppercase font-bold">Insumos Actuales</span>
                                <span className="font-black">$ 14.2M</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <span className="opacity-40 uppercase font-bold">Margen Bruto</span>
                                <span className="font-black text-primary">62.8%</span>
                            </div>
                            <div className="pt-4 border-t border-white/5">
                                <p className="text-[9px] font-medium leading-relaxed opacity-40 italic">
                                    *Sugerencia: Incremente el plato 'Corte Master' un 5% para optimizar el ROI.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
