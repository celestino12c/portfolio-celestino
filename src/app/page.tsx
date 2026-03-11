import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Celestino Tchacamba. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Desenvolvido com amor por Celestino Tchacamba.{" "}
            <a
              href="https://github.com/celestino12c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}