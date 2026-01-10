"use client"

import Sidebar from "@/components/Sidebar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="flex h-screen bg-black overflow-hidden selection:bg-primary/20">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-12 custom-scrollbar">
          {children}
        </main>
      </body>
    </html>
  )
}
