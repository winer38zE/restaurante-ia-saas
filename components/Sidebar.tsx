"use client"

import {
    LayoutDashboard,
    UtensilsCrossed,
    TrendingUp,
    BrainCircuit,
    LogOut,
    Zap
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Mi Menú", href: "/menu", icon: UtensilsCrossed },
    { name: "El Cerebro", href: "/finanzas", icon: TrendingUp },
    { name: "Mentor IA", href: "/mentor-ia", icon: BrainCircuit },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="flex h-full flex-col bg-black border-r border-white/5 w-72">
            <div className="flex h-24 items-center px-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary">
                        <Zap className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-black tracking-tighter uppercase italic">GastroIA</span>
                </div>
            </div>

            <nav className="flex-1 px-4 space-y-2 mt-8">
                {navigation.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "nav-link text-sm font-semibold uppercase tracking-wider",
                            pathname === item.href && "nav-link-active"
                        )}
                    >
                        <item.icon className="w-5 h-5" />
                        {item.name}
                    </Link>
                ))}
            </nav>

            <div className="p-6 border-t border-white/5">
                <button className="nav-link w-full text-sm font-semibold uppercase tracking-widest text-red-500/50 hover:text-red-500">
                    <LogOut className="w-5 h-5" />
                    Salir del Sistema
                </button>
            </div>
        </div>
    )
}
