"use client"

import { Activity, TrendingUp, DollarSign, Terminal, ShieldCheck } from "lucide-react"

export default function Contabilidad2026() {
    return (
        <div className="min-h-screen bg-black text-primary p-6 lg:p-12 font-mono">
            <header className="mb-20 border-b border-primary/10 pb-10">
                <h1 className="text-5xl font-black uppercase italic tracking-tighter">Terminal <span className="text-white">Contable</span></h1>
                <p className="text-sm opacity-40 mt-4">Auditoría síncrona de ingresos y egresos.</p>
            </header>

            <div className="grid lg:grid-cols-2 gap-10">
                <div className="command-card space-y-10">
                    <div className="flex justify-between border-b border-primary/10 pb-6">
                        <span className="terminal-text">Resumen_Finanzas</span>
                        <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="space-y-6">
                        {[
                            { label: "Rev Bruta", val: "$14,200,000" },
                            { label: "Costos Fijos", val: "$4,200,000" },
                            { label: "Insumos (IA Opt)", val: "$2,800,000" },
                            { label: "Nomina", val: "$3,100,000" },
                        ].map((row, i) => (
                            <div key={i} className="flex justify-between text-xs">
                                <span className="opacity-40 uppercase tracking-widest">{row.label}</span>
                                <span className="font-bold underline decoration-primary/20">{row.val}</span>
                            </div>
                        ))}
                    </div>
                    <div className="pt-10 border-t border-primary/10 flex justify-between items-end">
                        <div>
                            <p className="terminal-text opacity-40">Utilidad Neta</p>
                            <h2 className="text-4xl font-black italic">$4,100,000</h2>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] font-bold text-white bg-primary px-2 py-0.5 mb-2">KPI: Saludable</p>
                            <span className="terminal-text opacity-20">ROI: 32%</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-10">
                    <div className="command-card bg-primary/5 border-primary/40">
                        <h3 className="terminal-text mb-6">Nota de Auditoría IA</h3>
                        <p className="text-xs leading-relaxed">
                            "Se detectó un excedente de $400k en el rubro de 'Bebidas Alcoholicas'. El flujo sugiere que el inventario no está rotando según lo proyectado. Se recomienda reducción de pedido para el ciclo 04."
                        </p>
                    </div>
                    <div className="luxury-card border-none bg-black ring-1 ring-primary/20 flex items-center justify-between p-10">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold italic">Plan de Expansión</h4>
                                <p className="text-[8px] opacity-40 uppercase tracking-widest">Predicción: Posible en 3 meses</p>
                            </div>
                        </div>
                        <button className="w-12 h-12 border border-primary flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
