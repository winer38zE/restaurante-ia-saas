"use client"

import {
    ShieldCheck,
    CheckCircle2,
    TrendingUp,
    Zap,
    Crown
} from "lucide-react"

const restaurants = [
    { id: 1, name: "Resort del Sol", plan: "basico", status: "Activo", revenue: 59000 },
    { id: 2, name: "La Brasa Roja", plan: "premium", status: "Activo", revenue: 119000 },
    { id: 3, name: "Fusion Deli", plan: "hibrido", status: "Pendiente", revenue: 40100 },
]

export default function PricingAdminPage() {
    return (
        <div className="min-h-screen bg-gradient-cryptify text-white p-6 lg:p-10 font-sans">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">SaaS Global <span className="text-emerald-400">Admin</span></h1>
                    <p className="text-zinc-400 text-sm">Configuración de niveles de suscripción y facturación.</p>
                </div>
                <div className="glass-panel px-8 py-4 flex items-center gap-6">
                    <div className="text-right">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">MRR Total</p>
                        <h3 className="text-3xl font-bold text-emerald-400">$218.1k</h3>
                    </div>
                    <div className="h-10 w-[1px] bg-white/10" />
                    <div className="text-right">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Growth</p>
                        <h3 className="text-xl font-bold text-white">+12%</h3>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                    { name: "Básico", price: "$59k", desc: "QR + WhatsApp", icon: Zap, color: "text-blue-400", glow: "shadow-blue-500/20" },
                    { name: "Premium", price: "$119k", desc: "Todo + Contabilidad IA", icon: Crown, color: "text-yellow-400", glow: "shadow-yellow-500/20" },
                    { name: "Híbrido", price: "$40k+", desc: "Crecimiento Compartido", icon: TrendingUp, color: "text-emerald-400", glow: "shadow-emerald-500/20" },
                ].map((plan, i) => (
                    <div key={i} className="glass-panel p-8 group hover:border-white/20 transition-all relative overflow-hidden">
                        <div className={`absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500 ${plan.color}`}>
                            <plan.icon className="w-24 h-24" />
                        </div>

                        <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 shadow-lg ${plan.glow} ${plan.color}`}>
                            <plan.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{plan.name}</h3>
                        <p className="text-3xl font-bold mb-2 tracking-tight">{plan.price}</p>
                        <p className="text-sm text-zinc-500 mb-8">{plan.desc}</p>

                        <button className="w-full py-3 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all">
                            Configurar
                        </button>
                    </div>
                ))}
            </div>

            <div className="glass-panel p-8 overflow-hidden">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-bold">Restaurantes Registrados</h3>
                    <button className="text-xs font-bold text-emerald-400 uppercase tracking-widest hover:text-emerald-300">
                        Exportar Data
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/5 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                                <th className="pb-4 pl-4">Restaurante</th>
                                <th className="pb-4">Plan Actual</th>
                                <th className="pb-4">Estado</th>
                                <th className="pb-4">Facturación Mes</th>
                                <th className="pb-4 pr-4 text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {restaurants.map((res) => (
                                <tr key={res.id} className="group hover:bg-white/[0.02] transition-colors">
                                    <td className="py-4 pl-4">
                                        <p className="font-bold text-white flex items-center gap-2">
                                            {res.name}
                                            {res.plan === 'premium' && <CheckCircle2 className="w-4 h-4 text-yellow-400" />}
                                        </p>
                                    </td>
                                    <td className="py-4">
                                        <span className="text-xs font-medium text-zinc-400 uppercase bg-white/5 px-2 py-1 rounded">
                                            {res.plan}
                                        </span>
                                    </td>
                                    <td className="py-4">
                                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${res.status === 'Activo' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                                            {res.status}
                                        </span>
                                    </td>
                                    <td className="py-4 font-mono text-white/80">${res.revenue.toLocaleString()}</td>
                                    <td className="py-4 pr-4 text-right">
                                        <button className="p-2 hover:bg-white/10 rounded-lg text-zinc-500 hover:text-white transition-all">
                                            <TrendingUp className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
