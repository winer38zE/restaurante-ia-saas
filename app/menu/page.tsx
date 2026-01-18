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
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-border pb-8">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                            Menu Management
                        </span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Gestión de <span className="text-primary">Platos</span></h1>
                    <p className="text-muted-foreground text-sm max-w-xl">
                        Personalice su oferta gastronómica y actualice su flota de códigos QR.
                    </p>
                </div>
                <button className="h-10 px-4 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Nuevo Ítem
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "Ver Menú Online", desc: "Vista previa del comensal", icon: <LayoutGrid className="w-5 h-5" /> },
                    { title: "Generar QR", desc: "Digitalización de mesas", icon: <QrCode className="w-5 h-5" /> },
                    { title: "Categorías", desc: "Organización de cocina", icon: <Utensils className="w-5 h-5" /> },
                    { title: "Buscador", desc: "Filtrar por insumo", icon: <Search className="w-5 h-5" /> },
                ].map((action, i) => (
                    <div key={i} className="bg-card p-6 rounded-lg border border-border cursor-pointer hover:border-primary/50 transition-all">
                        <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center text-muted-foreground mb-4 group-hover:text-primary transition-colors">
                            {action.icon}
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-foreground mb-1">{action.title}</h3>
                            <p className="text-xs text-muted-foreground">{action.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Catálogo Maestro</h3>
                    <div className="flex gap-2 items-center">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-xs font-medium text-primary">Live Database</span>
                    </div>
                </div>

                <div className="space-y-2">
                    {[
                        { name: "Burger Wagyu A5", status: "Activo", price: "$42,000", statusColor: "text-primary bg-primary/10" },
                        { name: "Pasta Gorgonzola", status: "Pausado", price: "$32,000", statusColor: "text-amber-500 bg-amber-500/10" },
                        { name: "Vino Rosso", status: "Activo", price: "$124,000", statusColor: "text-primary bg-primary/10" },
                    ].map((plate, i) => (
                        <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-background border border-border hover:bg-muted/50 transition-all cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-md bg-muted border border-border flex items-center justify-center text-muted-foreground">
                                    <Utensils className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-sm text-foreground">{plate.name}</h4>
                                    <span className={`inline-block mt-0.5 px-1.5 py-0.5 rounded text-[10px] font-medium ${plate.statusColor}`}>
                                        {plate.status}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="font-semibold text-foreground text-sm">{plate.price}</span>
                                <div className="w-8 h-8 rounded-md flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground transition-all">
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
