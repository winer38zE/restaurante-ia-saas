"use client"

import { useState } from "react"
import {
    ShieldCheck,
    CreditCard,
    Settings,
    CheckCircle2,
    AlertCircle,
    TrendingUp,
    Layout
} from "lucide-react"

const restaurants = [
    { id: 1, name: "Resort del Sol", plan: "basico", status: "Activo", revenue: 59000 },
    { id: 2, name: "La Brasa Roja", plan: "premium", status: "Activo", revenue: 119000 },
    { id: 3, name: "Fusion Deli", plan: "hibrido", status: "Pendiente", revenue: 40100 },
]

export default function PricingAdminPage() {
    return (
        <div className="min-h-screen bg-background p-10 space-y-12">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-black tracking-tighter">SaaS Global Admin</h1>
                    <p className="text-foreground/40 mt-1">Configuración de niveles de suscripción y facturación.</p>
                </div>
                <div className="flex gap-4">
                    <div className="p-4 rounded-3xl bg-card border border-border text-right">
                        <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40">MRR Total</p>
                        <h3 className="text-2xl font-black text-primary">$218.1k</h3>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { name: "Básico", price: "$59k", desc: "QR + WhatsApp", color: "bg-blue-500" },
                    { name: "Premium", price: "$119k", desc: "Todo + Contabilidad IA", color: "bg-primary" },
                    { name: "Híbrido", price: "$40k+", desc: "Crecimiento Compartido", color: "bg-purple-500" },
                ].map((plan, i) => (
                    <div key={i} className="p-8 rounded-[3rem] bg-card border border-border group hover:border-primary/20 transition-all">
                        <div className={`w-12 h-12 rounded-2xl ${plan.color} mb-6 flex items-center justify-center text-white shadow-xl opacity-80`}>
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold">{plan.name}</h3>
                        <p className="text-3xl font-black mt-2 tracking-tighter">{plan.price}</p>
                        <p className="text-sm text-foreground/40 mt-1">{plan.desc}</p>
                        <button className="w-full h-12 mt-8 bg-secondary text-foreground rounded-2xl font-bold text-xs uppercase tracking-widest border border-border hover:bg-border transition-colors">
                            Editar Parámetros
                        </button>
                    </div>
                ))}
            </div>

            <div className="p-10 rounded-[4rem] bg-card border border-border">
                <h3 className="text-2xl font-black mb-8">Restaurantes Registrados</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-border text-[10px] font-black uppercase tracking-widest text-foreground/30">
                                <th className="pb-6 px-4">Restaurante</th>
                                <th className="pb-6 px-4">Plan Actual</th>
                                <th className="pb-6 px-4">Estado</th>
                                <th className="pb-6 px-4">Facturación Mes</th>
                                <th className="pb-6 px-4">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {restaurants.map((res) => (
                                <tr key={res.id} className="group hover:bg-secondary/20 transition-colors">
                                    <td className="py-6 px-4">
                                        <p className="font-bold flex items-center gap-2">
                                            {res.name}
                                            {res.plan === 'premium' && <CheckCircle2 className="w-4 h-4 text-primary" />}
                                        </p>
                                    </td>
                                    <td className="py-6 px-4 uppercase text-[10px] font-black tracking-widest">{res.plan}</td>
                                    <td className="py-6 px-4">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${res.status === 'Activo' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
                                            {res.status}
                                        </span>
                                    </td>
                                    <td className="py-6 px-4 font-black">${res.revenue.toLocaleString()}</td>
                                    <td className="py-6 px-4">
                                        <button className="p-2 hover:bg-secondary rounded-xl text-foreground/40 hover:text-primary transition-all">
                                            <TrendingUp className="w-5 h-5" />
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
