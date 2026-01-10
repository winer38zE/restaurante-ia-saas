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
        <div className="space-y-12 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-8">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                            Menu Management
                        </span>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Gestión de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Platos</span></h1>
                    <p className="text-gray-400 text-sm max-w-xl">
                        Personalice su oferta gastronómica y actualice su flota de códigos QR en tiempo real.
                    </p>
                </div>
                <button className="h-12 px-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2">
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
                    <div key={i} className="glass-panel p-6 group cursor-pointer hover:bg-emerald-500/5 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300 mb-6 border border-white/5 group-hover:border-emerald-500/30">
                            {action.icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{action.title}</h3>
                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{action.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="glass-panel p-8">
                <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Catálogo Maestro</h3>
                    <div className="flex gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Live Database</span>
                    </div>
                </div>

                <div className="space-y-3">
                    {[
                        { name: "Burger Wagyu A5", status: "Activo", price: "$42,000", statusColor: "text-emerald-400 bg-emerald-500/10" },
                        { name: "Pasta Gorgonzola", status: "Pausado", price: "$32,000", statusColor: "text-amber-400 bg-amber-500/10" },
                        { name: "Vino Rosso", status: "Activo", price: "$124,000", statusColor: "text-emerald-400 bg-emerald-500/10" },
                    ].map((plate, i) => (
                        <div key={i} className="flex justify-between items-center p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-emerald-500/20 transition-all group cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-emerald-400 transition-colors">
                                    <Utensils className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-white group-hover:text-emerald-400 transition-colors">{plate.name}</h4>
                                    <span className={`inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${plate.statusColor}`}>
                                        {plate.status}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <span className="font-mono font-bold text-white">{plate.price}</span>
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
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
