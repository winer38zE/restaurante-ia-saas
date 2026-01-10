"use client"

import { useState } from "react"
import {
    ShoppingBag,
    ChevronLeft,
    Search,
    Plus,
    Info
} from "lucide-react"

const categories = ["Entradas", "Principales", "Postres", "Bebidas"]
const menuItems = [
    { id: 1, name: "Tacos de Ribeye", price: 15.00, desc: "Costilla de res premium con tortilla artesanal y salsa tatemada.", cat: "Entradas" },
    { id: 2, name: "Salmón al Eneldo", price: 28.00, desc: "Salmón fresco a la plancha con costra de hierbas y puré trufado.", cat: "Principales" },
    { id: 3, name: "Volcán de Chocolate", price: 12.00, desc: "Bizcocho tibio de chocolate amargo con centro líquido.", cat: "Postres" },
]

export default function PublicMenuPage({ params }: { params: { slug: string } }) {
    const [cartCount, setCartCount] = useState(0)
    const [activeCategory, setActiveCategory] = useState("Principales")

    return (
        <div className="min-h-screen bg-secondary/20 pb-20">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                        <ChevronLeft className="w-5 h-5" />
                    </div>
                    <div>
                        <h1 className="font-bold text-lg leading-none">Resort del Sol</h1>
                        <p className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold">Menú Digital</p>
                    </div>
                </div>
                <div className="relative">
                    <ShoppingBag className="w-6 h-6 text-foreground/60" />
                    {cartCount > 0 && (
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                            {cartCount}
                        </span>
                    )}
                </div>
            </div>

            {/* Hero Mini */}
            <div className="p-6">
                <div className="h-40 rounded-3xl bg-primary relative overflow-hidden flex items-center px-8">
                    <div className="relative z-10 text-white max-w-[60%]">
                        <h2 className="text-2xl font-black mb-1">Especial del Chef</h2>
                        <p className="text-xs text-white/70">Prueba nuestra nueva creación: Risotto de Langosta.</p>
                    </div>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent" />
                </div>
            </div>

            {/* Categories Horizontal */}
            <div className="flex gap-4 overflow-x-auto px-6 mb-8 no-scrollbar">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`whitespace-nowrap px-6 py-2.5 rounded-2xl font-bold transition-all ${activeCategory === cat ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-card text-foreground/40 border border-border"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Menu List */}
            <div className="px-6 space-y-4">
                <h3 className="text-xl font-bold mb-6">{activeCategory}</h3>
                {menuItems.map((item) => (
                    <div key={item.id} className="p-4 rounded-[2rem] bg-card border border-border flex gap-4 hover:shadow-xl hover:shadow-primary/5 transition-all">
                        <div className="w-24 h-24 rounded-2xl bg-secondary object-cover overflow-hidden">
                            <img src="/hero.png" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col pt-1">
                            <div className="flex justify-between items-start">
                                <h4 className="font-bold">{item.name}</h4>
                                <span className="font-black text-primary">${item.price.toFixed(2)}</span>
                            </div>
                            <p className="text-[11px] text-foreground/40 mt-1 line-clamp-2 leading-relaxed">
                                {item.desc}
                            </p>
                            <div className="mt-auto flex justify-between items-center">
                                <button className="p-1.5 text-foreground/40">
                                    <Info className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setCartCount(c => c + 1)}
                                    className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md shadow-primary/10"
                                >
                                    <Plus className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Floating Bottom Button */}
            {cartCount > 0 && (
                <div className="fixed bottom-6 left-6 right-6 z-50">
                    <button className="w-full h-14 bg-primary text-white rounded-2xl font-bold flex items-center justify-between px-8 shadow-2xl shadow-primary/30 animate-in fade-in slide-in-from-bottom-5">
                        <span>{cartCount} Items en el Carrito</span>
                        <span className="text-xl font-black">Ver Pedido</span>
                    </button>
                </div>
            )}
        </div>
    )
}
