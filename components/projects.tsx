import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-commerce Dashboard",
    description:
      "Dashboard administrativo completo para gerenciamento de e-commerce com visualização de dados em tempo real.",
    techs: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Portfolio Builder",
    description:
      "Aplicação web que permite criar portfólios personalizados com drag-and-drop e templates modernos.",
    techs: ["JavaScript", "CSS", "HTML"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management App",
    description:
      "Sistema de gerenciamento de tarefas com autenticação, categorização e sincronização em nuvem.",
    techs: ["Next.js", "TypeScript", "CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
]

export function Projects() {
  return (
    <section id="projetos" className="py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12">
            Meus <span className="text-primary italic">Projetos</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex flex-col h-full">
                  <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-foreground/60 text-sm mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors text-sm"
                      aria-label={`Ver código de ${project.title} no GitHub`}
                    >
                      <Github className="h-4 w-4" />
                      Código
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors text-sm"
                      aria-label={`Ver projeto ${project.title} ao vivo`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
