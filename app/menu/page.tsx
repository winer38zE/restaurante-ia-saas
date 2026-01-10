"use client"

import {
    Plus,
    ShoppingBag,
    Info,
    ChevronLeft,
    Star
} from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const menuItems = [
    { id: 1, name: "Burger Wagyu A5", price: 42000, desc: "Carne premium, queso cheddar añejo y pan artesanal.", category: "Principales", image: "/placeholder.png" },
    { id: 2, name: "Papas Trufadas", price: 18000, desc: "Papas rústicas con aceite de trufa blanca y parmesano.", category: "Acompañamientos", image: "/placeholder.png" },
    { id: 3, name: "Vino Rosso Elite", price: 125000, desc: "Cosecha seleccionada de la casa.", category: "Bebidas", image: "/placeholder.png" },
]

export default function DigitalMenu() {
    const [cartCount, setCartCount] = useState(0)

    return (
        <div className="min-h-screen bg-black text-white selection:bg-primary/20 pb-32">
            {/* Black Luxury Navbar */}
            <nav className="sticky top-0 z-50 glass-header px-10 h-24 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center">
                        <ChevronLeft className="w-5 h-5" />
                    </div>
                    <div>
                        <h1 className="text-xl font-black tracking-tight italic">Resort <span className="text-primary italic">del Sol</span></h1>
                        <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white/20">Experiencia Digital</p>
                    </div>
                </div>
                <div className="relative">
                    <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center text-primary glow-emerald">
                        <ShoppingBag className="w-6 h-6" />
                    </div>
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 w-6 h-6 bg-white text-black text-[10px] flex items-center justify-center rounded-full font-black">
                            {cartCount}
                        </span>
                    )}
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-10 pt-16 space-y-20">
                {/* Categories Scroller */}
                <div className="flex gap-10 overflow-x-auto no-scrollbar pb-4 border-b border-white/5">
                    {["Sugerencias", "Principales", "Acompañamientos", "Postres", "Bebidas"].map((cat, i) => (
                        <button key={i} className={`text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap ${i === 1 ? 'text-primary' : 'text-white/20 hover:text-white'}`}>
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Featured Card */}
                <div className="luxury-card overflow-hidden p-0 group border-primary/20 bg-primary/5">
                    <div className="relative aspect-video">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                        <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-primary text-black text-[8px] font-black uppercase tracking-widest rounded-full">
                            Plato de la Semana
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="flex justify-between items-end mb-4">
                            <h2 className="text-3xl font-black italic tracking-tighter">Burger Wagyu A5</h2>
                            <p className="text-2xl font-black text-primary">$42.000</p>
                        </div>
                        <p className="text-sm text-white/40 mb-8 max-w-md">La perfección culinaria resumida en una mordida. Carne de grado A5 con maduración de 30 días.</p>
                        <button
                            onClick={() => setCartCount(c => c + 1)}
                            className="w-full h-14 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-primary transition-all flex items-center justify-center gap-2 group"
                        >
                            Añadir al Pedido <Plus className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Regular List */}
                <div className="grid gap-12">
                    {menuItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center group">
                            <div className="space-y-1">
                                <h3 className="text-lg font-bold group-hover:text-primary transition-colors italic">{item.name}</h3>
                                <p className="text-xs text-white/40 max-w-xs">{item.desc}</p>
                                <p className="text-sm font-black mt-2">$ {item.price.toLocaleString()}</p>
                            </div>
                            <button
                                onClick={() => setCartCount(c => c + 1)}
                                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black hover:border-transparent transition-all"
                            >
                                <Plus className="w-6 h-6" />
                            </button>
                        </div>
                    ))}
                </div>
            </main>

            {/* Checkout Floating Bar */}
            {cartCount > 0 && (
                <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-md glass-header p-6 rounded-[2.5rem] border border-primary/20 glow-emerald flex items-center justify-between z-50">
                    <div>
                        <p className="text-[8px] font-black uppercase tracking-widest text-primary mb-1">Total Pedido</p>
                        <p className="text-xl font-black">$ {(cartCount * 42000).toLocaleString()}</p>
                    </div>
                    <button className="px-8 h-12 bg-primary text-black text-[10px] font-black uppercase tracking-widest rounded-3xl active:scale-95 transition-all">
                        Confirmar
                    </button>
                </div>
            )}
        </div>
    )
}
