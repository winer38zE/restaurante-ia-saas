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
        <div className="space-y-12 max-w-7xl mx-auto p-4 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-8">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">
                            Menu Management
                        </span>
                    </div>
                    <h1 className="text-4xl font-black tracking-tight text-white mb-2">Gestión de <span className="text-primary">Platos</span></h1>
                    <p className="text-muted-foreground text-sm max-w-xl">
                        Personalice su oferta gastronómica y actualice su flota de códigos QR en tiempo real.
                    </p>
                </div>
                <button className="h-12 px-6 rounded-full bg-primary text-black text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Nuevo Ítem
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "Ver Menú Online", desc: "Vista previa del comensal", icon: <LayoutGrid className="w-6 h-6" /> },
                    { title: "Generar QR", desc: "Digitalización de mesas", icon: <QrCode className="w-6 h-6" /> },
                    { title: "Categorías", desc: "Organización de cocina", icon: <Utensils className="w-6 h-6" /> },
                    { title: "Buscador", desc: "Filtrar por insumo", icon: <Search className="w-6 h-6" /> },
                ].map((action, i) => (
                    <div key={i} className="bg-card p-6 rounded-[2rem] border border-border group cursor-pointer hover:border-primary/50 transition-all shadow-xl">
                        <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center text-zinc-500 group-hover:text-primary group-hover:scale-110 transition-all duration-300 mb-6 border border-white/5 group-hover:border-primary/30">
                            {action.icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{action.title}</h3>
                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{action.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-card p-8 rounded-[2.5rem] border border-border shadow-2xl">
                <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Catálogo Maestro</h3>
                    <div className="flex gap-2 items-center">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Live Database</span>
                    </div>
                </div>

                <div className="space-y-3">
                    {[
                        { name: "Burger Wagyu A5", status: "Activo", price: "$42,000", statusColor: "text-primary bg-primary/10" },
                        { name: "Pasta Gorgonzola", status: "Pausado", price: "$32,000", statusColor: "text-amber-400 bg-amber-500/10" },
                        { name: "Vino Rosso", status: "Activo", price: "$124,000", statusColor: "text-primary bg-primary/10" },
                    ].map((plate, i) => (
                        <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-background border border-border hover:bg-secondary/50 hover:border-primary/20 transition-all group cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-zinc-500 group-hover:text-primary transition-colors">
                                    <Utensils className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-white group-hover:text-primary transition-colors">{plate.name}</h4>
                                    <span className={`inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${plate.statusColor}`}>
                                        {plate.status}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <span className="font-black text-white text-lg">{plate.price}</span>
                                <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-zinc-500 group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
                                    <ChevronRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
