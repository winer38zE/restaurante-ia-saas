"use client"

import {
    Timer,
    ChefHat,
    CheckCircle2,
    AlertCircle,
    Hash,
    Utensils
} from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const initialOrders = [
    { id: "1024", table: "05", items: ["Burger Wagyu x2", "Papas Trufadas"], time: "12 min", status: "preparing" },
    { id: "1025", table: "02", items: ["Pasta Carbonara", "Vino Tinto"], time: "4 min", status: "pending" },
    { id: "1026", table: "09", items: ["Ensalada Cesar", "Limonada"], time: "22 min", status: "delayed" },
]

export default function KitchenControl() {
    const [orders, setOrders] = useState(initialOrders)

    return (
        <div className="max-w-7xl mx-auto space-y-12">
            <div className="flex justify-between items-end border-b border-white/5 pb-10">
                <div>
                    <h1 className="text-5xl font-black tracking-tighter glow-text">Control de <span className="text-primary italic">Cocina</span></h1>
                    <p className="text-lg text-white/40 font-medium mt-2">Gestión de flujo operativo en tiempo real.</p>
                </div>
                <div className="flex gap-4">
                    <div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Sistema Sincronizado</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {orders.map((order) => (
                    <div key={order.id} className={cn(
                        "luxury-card relative overflow-hidden",
                        order.status === 'delayed' && "border-red-500/30 bg-red-500/5"
                    )}>
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40">
                                    <Hash className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xl font-black uppercase italic">Pedido #{order.id}</p>
                                    <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Mesa {order.table}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-primary font-black text-xs">
                                <Timer className="w-4 h-4" />
                                {order.time}
                            </div>
                        </div>

                        <div className="space-y-3 mb-8">
                            {order.items.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm font-medium text-white/70">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-sm shadow-primary" />
                                    {item}
                                </div>
                            ))}
                        </div>

                        <button className="w-full h-12 bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-primary hover:text-black hover:border-transparent transition-all flex items-center justify-center gap-2 group">
                            Completar Pedido <CheckCircle2 className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
