"use client"

import {
    Timer,
    CheckCircle2,
    Hash,
    ChefHat,
    AlertCircle
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
        <div className="max-w-7xl mx-auto space-y-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-8">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-bold uppercase tracking-wider">
                            Kitchen Display System
                        </span>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-white">Control de <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Cocina</span></h1>
                    <p className="text-gray-400 mt-2 text-sm">Gestión de flujo operativo sincronizado en tiempo real.</p>
                </div>
                <div className="flex gap-4">
                    <div className="glass-panel px-4 py-2 flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Live Sync Active</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {orders.map((order) => (
                    <div key={order.id} className={cn(
                        "glass-panel p-6 relative overflow-hidden group border-l-4",
                        order.status === 'delayed' ? "border-l-red-500 bg-red-500/5 hover:bg-red-500/10" :
                            order.status === 'preparing' ? "border-l-orange-500 bg-orange-500/5 hover:bg-orange-500/10" :
                                "border-l-emerald-500 hover:bg-emerald-500/5"
                    )}>
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                                    <Hash className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white tracking-tight">#{order.id}</p>
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Mesa {order.table}</p>
                                </div>
                            </div>
                            <div className={cn(
                                "flex items-center gap-2 font-bold text-sm px-2 py-1 rounded",
                                order.status === 'delayed' ? "text-red-400 bg-red-500/10" : "text-gray-400 bg-white/5"
                            )}>
                                <Timer className="w-4 h-4" />
                                {order.time}
                            </div>
                        </div>

                        <div className="space-y-3 mb-8 min-h-[100px]">
                            {order.items.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 text-sm font-medium text-gray-300">
                                    <div className="w-1.5 h-1.5 mt-2 bg-white/20 rounded-full group-hover:bg-white/60 transition-colors" />
                                    {item}
                                </div>
                            ))}
                        </div>

                        <button className="w-full py-3 bg-white/5 border border-white/10 text-gray-400 text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-emerald-500 hover:text-white hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 group/btn">
                            Completar <CheckCircle2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
