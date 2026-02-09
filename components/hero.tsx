"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight">
              {"Olá! Sou um"}
              <br />
              {"Desenvolvedor"}
              <br />
              <span className="text-primary italic">Front-End</span>
            </h1>

            <div className="flex flex-wrap gap-3 mt-10 justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-full px-8 font-semibold">
                <a href="#sobre">Sobre Mim</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 font-semibold bg-transparent border-foreground/20 hover:bg-foreground/5"
              >
                <a href="#contato">Contato</a>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile */}
          <div className="flex-1 flex flex-col items-center">
            {/* Profile Image with Glow */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/40 blur-2xl scale-110" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/20">
                <img
                  src="/images/screenshot-2025-05-02-22-24-25-841-com.jpg"
                  alt="Foto de perfil"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="mt-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary italic">
                dnzzkkkkj
              </h2>
              <p className="text-foreground/80 text-lg mt-1">
                Desenvolvedor Web
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
