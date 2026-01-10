"use client"

import { useState } from "react"
import {
    Plus,
    Search,
    Sparkles,
    Trash2,
    Edit3,
    MoreVertical,
    ChevronDown,
    Camera
} from "lucide-react"
import { cn } from "@/lib/utils"

const initialItems = [
    { id: 1, name: "Hamburguesa Wagyu", category: "Principales", price: 24.50, status: "Disponible", image: "/hero.png" },
    { id: 2, name: "Pizza Di'Ablo", category: "Pizzas", price: 18.00, status: "Disponible", image: "/hero.png" },
    { id: 3, name: "Pasta Carbonara Auténtica", category: "Pastas", price: 16.50, status: "Agotado", image: "/hero.png" },
]

export default function MenuPage() {
    const [items, setItems] = useState(initialItems)
    const [search, setSearch] = useState("")

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tight">Gestión de Menú</h1>
                    <p className="text-foreground/40 mt-1">Crea, edita y optimiza tus platos con ayuda de IA.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-foreground font-bold rounded-2xl border border-border hover:bg-secondary/80 transition-all active:scale-95">
                        <Sparkles className="w-4 h-4 text-primary" />
                        Optimización IA
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95">
                        <Plus className="w-4 h-4" />
                        Nuevo Plato
                    </button>
                </div>
            </div>

            {/* Filters and Search */}
            <div className="flex flex-col sm:row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                    <input
                        type="text"
                        placeholder="Buscar platos o categorías..."
                        className="w-full h-12 pl-12 pr-4 bg-card border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    <button className="h-12 px-5 bg-card border border-border rounded-2xl font-semibold flex items-center gap-2 hover:bg-secondary transition-colors">
                        Categorías
                        <ChevronDown className="w-4 h-4" />
                    </button>
                    <button className="h-12 px-5 bg-card border border-border rounded-2xl font-semibold flex items-center gap-2 hover:bg-secondary transition-colors">
                        Filtros
                    </button>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {items.filter(i => i.name.toLowerCase().includes(search.toLowerCase())).map((item) => (
                    <div key={item.id} className="group bg-card border border-border rounded-[2.5rem] overflow-hidden hover:border-primary/30 transition-all flex flex-col">
                        <div className="relative aspect-video overflow-hidden">
                            <img src={item.image} alt={item.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute top-4 left-4">
                                <span className={cn(
                                    "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                                    item.status === "Disponible" ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
                                )}>
                                    {item.status}
                                </span>
                            </div>
                            <button className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-md rounded-xl text-white hover:bg-black/40 transition-colors">
                                <MoreVertical className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold">{item.name}</h3>
                                <span className="text-lg font-black text-primary">${item.price.toFixed(2)}</span>
                            </div>
                            <p className="text-sm text-foreground/40 mb-6">{item.category}</p>

                            <div className="mt-auto flex gap-2">
                                <button className="flex-1 h-11 flex items-center justify-center gap-2 bg-secondary text-foreground rounded-xl font-bold hover:bg-border transition-colors">
                                    <Edit3 className="w-4 h-4" />
                                    Editar
                                </button>
                                <button className="w-11 h-11 flex items-center justify-center bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* AI Create Card */}
                <button className="group border-2 border-dashed border-border rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center hover:border-primary/50 hover:bg-primary/5 transition-all gap-4">
                    <div className="w-16 h-16 rounded-3xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Sparkles className="w-8 h-8" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold">Generar con IA</h4>
                        <p className="text-sm text-foreground/40 mt-1">Sube una foto y deja que nuestra IA haga el resto.</p>
                    </div>
                    <div className="flex gap-2 mt-2">
                        <div className="px-4 py-2 bg-background border border-border rounded-xl text-xs font-bold text-foreground/60 flex items-center gap-2">
                            <Camera className="w-3 h-3" /> Foto
                        </div>
                        <div className="px-4 py-2 bg-background border border-border rounded-xl text-xs font-bold text-foreground/60 flex items-center gap-2">
                            <Edit3 className="w-3 h-3" /> Texto
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}
