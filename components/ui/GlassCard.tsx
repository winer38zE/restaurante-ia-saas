
import React from 'react'

interface GlassCardProps {
    title: string
    value: string | number
    trend?: string
    trendUp?: boolean
    icon?: React.ReactNode
    className?: string
}

export const GlassCard = ({ title, value, trend, trendUp, icon, className = "" }: GlassCardProps) => {
    return (
        <div className={`
            bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl 
            shadow-2xl shadow-emerald-500/10 
            hover:bg-white/10 hover:border-emerald-500/30 
            transition-all duration-300 
            p-6 flex flex-col justify-between h-full min-h-[140px] group 
            ${className}
        `}>
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-gray-300 group-hover:text-white transition-colors">{title}</h3>
                {icon && <div className="text-gray-400 group-hover:text-emerald-400 transition-colors shadow-emerald-500/20">{icon}</div>}
            </div>

            <div className="space-y-2">
                <p className="text-3xl font-bold tracking-tight text-white group-hover:text-emerald-50 transition-colors">{value}</p>

                {trend && (
                    <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${trendUp ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
                            {trend}
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}
