"use client"

import { Activity, TrendingUp, DollarSign, ShieldCheck, ArrowUpRight, ArrowDownRight, MoreHorizontal } from "lucide-react"

export default function Contabilidad2026() {
    return (
        <div className="min-h-screen bg-gradient-cryptify text-white p-6 lg:p-10 font-sans">
            <header className="mb-12">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Terminal <span className="text-emerald-400">Contable</span></h1>
                <p className="text-zinc-400 text-sm">Auditoría síncrona de ingresos, egresos y proyecciones.</p>
            </header>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Financial Summary Card */}
                <div className="glass-panel p-8 space-y-8">
                    <div className="flex justify-between items-center border-b border-white/5 pb-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                                <Activity className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-lg">Resumen Financiero</span>
                        </div>
                        <button className="p-2 hover:bg-white/5 rounded-lg text-zinc-500 hover:text-white transition-colors">
                            <MoreHorizontal className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="space-y-4">
                        {[
                            { label: "Ingresos Brutos", val: "$14,200,000", bg: "bg-emerald-500/5", text: "text-white" },
                            { label: "Costos Fijos", val: "$4,200,000", bg: "bg-white/5", text: "text-zinc-300" },
                            { label: "Insumos (IA Opt)", val: "$2,800,000", bg: "bg-blue-500/5", text: "text-blue-200" },
                            { label: "Nómina Operativa", val: "$3,100,000", bg: "bg-white/5", text: "text-zinc-300" },
                        ].map((row, i) => (
                            <div key={i} className={`flex justify-between items-center p-4 rounded-xl ${row.bg}`}>
                                <span className="text-xs uppercase tracking-wider font-medium opacity-60">{row.label}</span>
                                <span className={`font-bold font-mono ${row.text}`}>{row.val}</span>
                            </div>
                        ))}
                    </div>

                    <div className="pt-8 border-t border-white/5 flex justify-between items-end">
                        <div>
                            <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Utilidad Neta</p>
                            <h2 className="text-4xl font-bold text-white tracking-tight">$4,100,000</h2>
                        </div>
                        <div className="text-right">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                                <ShieldCheck className="w-3 h-3" /> Saludable
                            </div>
                            <p className="text-xs text-zinc-500 font-medium">ROI: 32%</p>
                        </div>
                    </div>
                </div>

                {/* Audit & Alerts Column */}
                <div className="space-y-8">
                    <div className="glass-panel p-8 border-l-4 border-l-orange-500 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                            <ShieldCheck className="w-24 h-24" />
                        </div>
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                            Nota de Auditoría IA
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            "Se detectó un excedente de <strong className="text-white">$400k</strong> en el rubro de 'Bebidas Alcohólicas'. El flujo sugiere que el inventario no está rotando según lo proyectado. Se recomienda reducción de pedido para el ciclo 04."
                        </p>
                        <button className="text-xs font-bold uppercase tracking-widest text-orange-400 hover:text-orange-300 transition-colors">
                            Ver Detalles &rarr;
                        </button>
                    </div>

                    <div className="glass-panel p-8 flex items-center justify-between group cursor-pointer hover:bg-white/[0.03] transition-colors">
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">Plan de Expansión</h4>
                                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mt-1">Predicción: Posible en 3 meses</p>
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:bg-emerald-500 group-hover:text-black group-hover:border-emerald-500 transition-all">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
