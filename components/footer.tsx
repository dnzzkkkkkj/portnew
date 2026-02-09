export function Footer() {
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/50">
            © {new Date().getFullYear()} dnzzkkkkj
          </p>
          <p className="text-sm text-foreground/50">
            Feito com{" "}
            <span className="text-primary">Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
