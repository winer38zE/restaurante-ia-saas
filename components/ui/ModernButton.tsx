
import React from 'react'
import { LucideIcon } from 'lucide-react'

interface ModernButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    icon?: LucideIcon
    className?: string
}

export const ModernButton = ({ children, icon: Icon, className = "", ...props }: ModernButtonProps) => {
    return (
        <button
            className={`
        relative overflow-hidden group
        bg-gradient-to-r from-emerald-500 to-teal-500 
        hover:from-emerald-400 hover:to-teal-400
        text-white font-bold py-3 px-8 
        rounded-full 
        shadow-lg shadow-emerald-500/20 
        transition-all duration-300 transform hover:scale-105
        flex items-center justify-center gap-2
        ${className}
      `}
            {...props}
        >
            {children}
            {Icon && <Icon className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
        </button>
    )
}
