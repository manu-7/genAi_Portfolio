import { Badge } from "@/components/ui/badge";
import { Brain, Server, Palette } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI & GenAI",
    description: "Specialized in RAG systems, LangChain, and production-ready LLM applications",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description: "Building scalable APIs with Django, FastAPI, and modern Python frameworks",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive interfaces with a focus on user experience and accessibility",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="font-mono" data-testid="badge-about">
            About Me
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold" data-testid="text-about-title">
            Engineering the Future with{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Intelligent AI
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-description">
            I'm a final-year Information Technology student with a passion for building AI-powered solutions. 
            My expertise spans the full stack of modern AI development - from designing efficient RAG architectures 
            and working with vector databases to deploying production-ready applications.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With hands-on experience in LangChain, FastAPI, and semantic search systems, I bridge the gap between 
            cutting-edge AI research and practical, scalable implementations. I'm certified as an Oracle Generative 
            AI Professional and continuously expanding my knowledge in LLMs and AI engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-card border border-card-border transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
              data-testid={`card-highlight-${index}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
