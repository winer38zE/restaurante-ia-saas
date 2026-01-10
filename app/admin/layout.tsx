"use client"

import {
    Activity,
    Cpu,
    Terminal,
    LayoutGrid,
    LogOut,
    ChevronLeft
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    return (
        <div className="flex min-h-screen bg-black text-primary overflow-hidden">
            {/* 2026 Admin Navigation Sidebar (Minimalist) */}
            <aside className="w-20 lg:w-64 border-r border-primary/10 flex flex-col items-center lg:items-stretch h-screen fixed left-0 top-0 bg-black z-50">
                <div className="h-32 flex items-center justify-center border-b border-primary/10 mb-10">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 border border-primary flex items-center justify-center glow-emerald">
                            <Terminal className="w-5 h-5" />
                        </div>
                        <span className="hidden lg:block text-xl font-black italic tracking-widest">G-IA</span>
                    </Link>
                </div>

                <nav className="flex-1 px-4 space-y-4">
                    {[
                        { label: "Dashboard", href: "/admin/dashboard", icon: <LayoutGrid className="w-5 h-5" /> },
                        { label: "Mentor IA", href: "/admin/ia-mentor", icon: <Cpu className="w-5 h-5" /> },
                        { label: "Contabilidad", href: "/admin/contabilidad", icon: <Activity className="w-5 h-5" /> },
                    ].map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-4 p-4 transition-all ${pathname === item.href ? 'bg-primary text-black font-black' : 'hover:bg-primary/5 opacity-40 hover:opacity-100'}`}
                        >
                            {item.icon}
                            <span className="hidden lg:block terminal-text">{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-primary/10">
                    <button className="flex items-center gap-4 p-4 w-full hover:bg-red-500/10 hover:text-red-500 transition-all opacity-40 hover:opacity-100">
                        <LogOut className="w-5 h-5" />
                        <span className="hidden lg:block terminal-text">Kill_Session</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 ml-20 lg:ml-64 relative">
                <div className="h-20 border-b border-primary/10 flex items-center justify-between px-10 glass-emerald sticky top-0 z-40">
                    <div className="flex items-center gap-4 terminal-text opacity-40">
                        <ChevronLeft className="w-4 h-4" /> LOCAL_HOST:8080
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                            <span className="terminal-text">System_Active</span>
                        </div>
                    </div>
                </div>
                <div className="p-0">
                    {children}
                </div>
            </main>
        </div>
    )
}
