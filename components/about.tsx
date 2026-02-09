export function About() {
  const technologies = ["JavaScript", "TypeScript", "Next.js", "HTML", "CSS"]
  
  return (
    <section id="sobre" className="py-24 bg-card/50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Sobre <span className="text-primary italic">Mim</span>
          </h2>
          
          <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
            <p>
              Sou um desenvolvedor front-end apaixonado por criar interfaces web 
              modernas e de alto desempenho. Meu foco está em transformar designs 
              em experiências digitais incríveis.
            </p>
            <p>
              Trabalho com as principais tecnologias do mercado, sempre buscando 
              as melhores práticas e soluções inovadoras para cada projeto.
            </p>
          </div>

          {/* Technologies */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Tecnologias
            </h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
