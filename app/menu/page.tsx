"use client"

import {
    Plus,
    QrCode,
    LayoutGrid,
    Search,
    ChevronRight,
    Utensils
} from "lucide-react"

export default function MenuPage() {
    return (
        <div className="space-y-12">
            <div className="flex justify-between items-end border-b border-white/5 pb-10">
                <div>
                    <h1 className="text-5xl font-black tracking-tighter uppercase italic">Gestión de <span className="text-primary italic">Platos</span></h1>
                    <p className="text-white/40 font-medium mt-2">Personalice su oferta y actualice su flota de códigos QR.</p>
                </div>
                <button className="h-14 px-8 bg-primary text-black text-[10px] font-black uppercase tracking-widest rounded-xl hover:brightness-90 transition-all flex items-center gap-3 active:scale-95">
                    <Plus className="w-5 h-5" /> Nuevo Ítem
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { title: "Ver Menú Online", desc: "Vista previa del comensal", icon: <LayoutGrid /> },
                    { title: "Generar QR", desc: "Digitalización de mesas", icon: <QrCode /> },
                    { title: "Categorías", desc: "Organización de cocina", icon: <Utensils /> },
                    { title: "Buscador", desc: "Filtrar por insumo", icon: <Search /> },
                ].map((action, i) => (
                    <div key={i} className="glass-card hover:border-primary/40 group flex flex-col justify-between h-[200px]">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/20 group-hover:text-primary transition-all">
                            {action.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold italic uppercase tracking-tighter">{action.title}</h3>
                            <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{action.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="glass-card mt-12 bg-white/2 border-white/5">
                <h3 className="text-sm font-black uppercase tracking-widest mb-10 border-b border-white/5 pb-6">Catálogo Maestro</h3>
                <div className="space-y-4">
                    {[
                        { name: "Burger Wagyu A5", status: "Activo", price: "$42,000" },
                        { name: "Pasta Gorgonzola", status: "Pausado", price: "$32,000" },
                        { name: "Vino Rosso", status: "Activo", price: "$124,000" },
                    ].map((plate, i) => (
                        <div key={i} className="flex justify-between items-center p-6 border border-white/5 rounded-xl hover:bg-white/5 transition-all group">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white/20">
                                    <Utensils className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold italic group-hover:text-primary transition-colors">{plate.name}</h4>
                                    <p className="text-[10px] uppercase font-bold text-white/20">{plate.status}</p>
                                </div>
                            </div>
                            <div className="text-right flex items-center gap-8">
                                <span className="font-black italic">{plate.price}</span>
                                <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
