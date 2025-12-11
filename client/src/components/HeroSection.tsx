import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import profilePhoto from "@assets/photo_1765470989155.png";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-gradient-shift bg-[length:400%_400%]" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-mono text-accent tracking-wider uppercase" data-testid="text-greeting">
                Hello, I'm
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight" data-testid="text-name">
                Manu Singh
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold" data-testid="text-title">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  GenAI Engineer
                </span>
                <span className="text-muted-foreground"> & Full-Stack Developer</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed" data-testid="text-bio">
              Building intelligent AI systems with RAG, LangChain, and Vector Databases. 
              I transform complex AI research into production-ready applications that solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={scrollToProjects} data-testid="button-view-projects">
                View Projects
                <ArrowDown className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToContact} data-testid="button-get-in-touch">
                Get in Touch
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/Manu-7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card border border-card-border text-muted-foreground transition-colors hover:text-foreground hover:border-primary/50"
                data-testid="link-github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/manusingh02"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card border border-card-border text-muted-foreground transition-colors hover:text-foreground hover:border-primary/50"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:msmanusingh07@gmail.com"
                className="p-3 rounded-lg bg-card border border-card-border text-muted-foreground transition-colors hover:text-foreground hover:border-primary/50"
                data-testid="link-email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 animate-glow-pulse" />
              <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-r from-primary to-accent animate-float">
                <img
                  src={profilePhoto}
                  alt="Manu Singh - GenAI Engineer"
                  className="w-full h-full rounded-full object-cover border-4 border-background"
                  data-testid="img-profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
