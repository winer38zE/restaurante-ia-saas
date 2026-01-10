import { Info, BookOpen } from "lucide-react"

interface EducationalCardProps {
    title: string;
    definition: string;
    example: string;
}

export function EducationalCard({ title, definition, example }: EducationalCardProps) {
    return (
        <div className="elite-card bg-primary/5 border-primary/10">
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <BookOpen className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-2 text-primary">{title}</h4>
                    <p className="text-sm text-foreground/70 mb-4 leading-relaxed italic">
                        "{definition}"
                    </p>
                    <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                        <p className="text-[10px] font-black uppercase tracking-widest text-foreground/30 mb-1">Ejemplo Práctico</p>
                        <p className="text-sm font-medium">{example}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
